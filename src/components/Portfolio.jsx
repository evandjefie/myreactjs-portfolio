import { useEffect, useState } from "react";

const Portfolio = () => {
  const [devproject, setDevprojects] = useState([]);
  const [opsproject, setOpsproject] = useState([]);

  useEffect(() => {
    fetch("devprojects.json")
    .then(res => res.json())
    .then (data => setDevprojects(data))
  }, [])

  useEffect(() => {
    fetch("opsprojects.json")
    .then(res => res.json())
    .then (data => setOpsproject(data))
  }, [])

  return (
    <div className="lg:mx-12 mx-4 my-32" id="portfolio">
      <div className="mb-20 flex flex-col sm:flex-row md:items-center justify-between gap-5">
        <div>
          <p className="text-xl text-headingcolor font-semibold mb-5">
            What Did I Achieve?
          </p>
          <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">
            My Portfolio
          </h2>
        </div>
        <button className="py-3 px-4 text-white rounded-md bg-body w-2/3 sm:w-auto">
          <a href="https://github.com/evandjefie" >        
            Visit My Github
          </a> 
        </button>
        
      </div>

      <div className="py-3">
        <p className="text-xl text-headingcolor font-semibold mb-5">
          Dev Projects
        </p>
        {/* project card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {
              devproject.map(project => <div key={project.id} className="shadow-xl rounded-lg">
                <img src={project.image} alt="" />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-2 text-headingcolor">{project.name}</h3>
                  <p className="text-body mb-4">{project.description}</p>
                  <a href={project.url} className="underline underline-offset-8">View <img src="/src/assets/arrow.png" alt="" className="w-3 inline-block ml-3" /></a>
                </div>
              </div>)
            }
        </div>
      </div>

      <div className="py-3 mt-3">
        <p className="text-xl text-headingcolor font-semibold mb-5">
          Ops Projects
        </p>
        {/* project card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {
              opsproject.map(project => <div key={project.id} className="shadow-xl rounded-lg">
                <img src={project.image} alt="" />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-2 text-headingcolor">{project.name}</h3>
                  <p className="text-body mb-4">{project.description}</p>
                  <a href={project.url} className="underline underline-offset-8">View <img src="/src/assets/arrow.png" alt="" className="w-3 inline-block ml-3" /></a>
                </div>
              </div>)
            }
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
