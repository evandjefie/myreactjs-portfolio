import proPic from "../assets/evandjefie-profile.jpeg";
const About = () => {
  return (
    <div className="lg:mx-12 mx-4" id="about">
      <div className="flex flex-col sm:flex-row md:gap-24 gap-12 items-center justify-between">
        <div className="sm:w-1/2"> 
          <img src={proPic} alt="" className="w-full rounded-full sm:w-11/12" />
        </div>
        <div className="sm:w-1/2">
          <p className="text-xl text-headingcolor font-semibold mb-5">
            Who Am I ?
          </p>
          <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">The Self-Taught Enthusiast</h2>
          <p className="mt-8 md:pr-8 mb-8">
            My name is Evan DJEFIE. I live in Abidjan, Ivory Coast, I'm a self-taught junior level DevOps engineer and FullStack developer.
            Development and Design has been my main focus for many years, specifically Web development, but I have the past years shifted my focus to cloud devops , which I have developed a great passion for. 
            <br /> <br />
            I enjoy the constant change in the technologies used in the area and love diving into new frameworks and technologies. 
            Spending time developing, building, deploying and monitoring app based on cloud is something I enjoy a lot. For my last cloud devops experience, I have deploy with terraform a monitoring server that collects system metrics (RA﻿M, DISK, CPU), as well as applications metrics .

          </p>
          <a href="https://wa.me/c/2250160125373" target="_blank" rel="noopener noreferrer">
            <button className="btn-primary">Contact Me</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
