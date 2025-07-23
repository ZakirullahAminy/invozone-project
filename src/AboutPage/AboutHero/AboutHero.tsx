import hero from "../../assets/About imgs/hero/AboutHero.webp";
function AboutHero() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${hero})` }}
        className="h-[120vh] md:h-[100vh] text-white pt-64 md:pt-44 bg-no-repeat"
      >
        <div className="px-10 lg:px-20  flex flex-col gap-6 items-start justify-start text-black">
          <h1 className="text-3xl lg:text-5xl font-medium w-full md:w-[50%]">
            Accelerate Your Business Growth With Us
          </h1>
          <p className="text-sm w-full md:w-[60%] lg:w-[50%]">
            Your business is only as good as the technology behind it. We have
            the expertise. You have the vision. We make technology happen! Our
            team of world-class engineers and innovators will build your next
            software project, leaving you to focus on running your business.
          </p>
          <p>
            <strong>Got an idea? Bring it to life with InvoZone!</strong>
          </p>
          <button className="text-white font-medium bg-blue-500 rounded-2xl border-none px-5 py-3">
            Step Into Innovation
          </button>
        </div>
      </div>
      <div className="bg-[#ECCB4D] flex flex-wrap justify-between items-center gap-2 py-7 px-10 lg:px-20">
        <p className="text-xl md:text-2xl font-medium">
          Ready To Explore Our Services & Client Stories?
        </p>
        <a
          href="#"
          className="bg-black px-2 py-1 text-white font-medium rounded-2xl "
        >
          Dive Into Our Portfolio
        </a>
      </div>
    </>
  );
}

export default AboutHero;
