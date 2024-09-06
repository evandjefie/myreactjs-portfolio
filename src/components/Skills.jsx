import { FaCloud, FaCode, FaMobileAlt, FaPaintBrush } from "react-icons/fa";

const skills = [
  {
    id: 1,
    name: "Cloud DevOps",
    description:
      "Expertise in configuring, deploying and managing cloud infrastructures on platforms such as AWS or digitalocean. Competence in creating pipelines with Jenkins and Ansible, as well as skills in automating GitOps deployments with tools such as Git, Docker, Kubernetes and Terraform. Ability to design scalable architectures and guarantee application availability and security in complex cloud environments with Prometheus and Istio.",
    icon: <FaCloud />,
  },
  {
    id: 2,
    name: "Web Development",
    description:
      "Passionate about creating dynamic, intuitive web experiences. Mastery of modern frameworks and CMS such as Reactjs and Wordpress. Expertise in back-end development with Node.js and django (python) as well as solid knowledge of databases such as MongoDB, PostgreSQL and MySQL. Ability to create responsive, high-performance websites to deliver an exceptional user experience.",
    icon: <FaCode />,
  },
  {
    id: 3,
    name: "Mobile Development",
    description:
      "Skilled in the design and development of mobile applications for iOS and Android. Experience in using technologies such as Flutter to create native cross-platform applications. Able to create fluid, responsive user interfaces while ensuring seamless integration with platform-specific functionality.",
    icon: <FaMobileAlt />,
  },
  {
    id: 4,
    name: "Graphic Design",
    description:
      "Creative and passionate about graphic design. Proficiency in Adobe Creative Suite tools such as Photoshop and Illustrator, as well as Canva and Figma. Skilled in designing striking visual elements for web and mobile applications, creating logos, attractive user interfaces and visual communication media that captivate target audiences.",
    icon: <FaPaintBrush />,
  },
];

const Skills = () => {
  return (
    <div className="lg:mx-12 mx-4 py-32" id="skills">
      <div className="mb-20">
        <p className="text-xl text-headingcolor font-semibold mb-5">
          What can I do?
        </p>
        <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">
          My Services
        </h2>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-bgShade p-8 rounded-lg cursor-pointer hover:-translate-y-5 transition-all duration-300"
          >
            <div className="w-14 h-14 p-3 bg-white rounded-lg shadow-md mb-7 flex items-center justify-center text-primary text-3xl">
              {skill.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;