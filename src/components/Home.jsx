import banner from "../assets/evandjefie.jpg";

const Home = () => {
  return (
    <div className="mt-20 bg-bgShade" id="home">
      <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between py-24 gap-5">
        <div className="md:w-1/2 w-full">
            <img src={banner} alt="" className="w-full rounded-lg" />
        </div>
        <div className="md:w-1/2 w-full mt-5">
          <p className="text-xl text-headingcolor font-semibold mb-5">Hey, I am Evan DJEFIE</p>
          <h1 className="md:text-6xl text-4xl font-bold text-headingcolor leading-snug md:leading-[76px]  mb-5">
            I create an <br/><span className="text-primary">Application Solution</span><br/> tailored to your needs!
          </h1>
          <p className="text-xl text-headingcolor font-semibold mb-5">
            According Agile Principles
          </p>
          <p className="text-2xl text-body leading-9 mb-8">
            DevOps | FullStack Dev | Designer
          </p>
          <button className="btn-primary">Get In Touch</button>
        </div>        
      </div>
    </div>
  );
};

export default Home;
