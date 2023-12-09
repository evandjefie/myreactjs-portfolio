FROM node:lts-alpine3.18 AS dev

LABEL maintainer="evandjefie"

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . .

RUN npm run build

FROM nginx:latest

COPY --from=dev /app/build /usr/share/nginx/html

EXPOSE 5173

CMD ["nginx", "-g", "daemon off;"]