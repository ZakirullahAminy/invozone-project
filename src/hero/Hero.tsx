import hero from "../assets/hero_img/hero_section.webp"
function Hero() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${hero})` }}
        className="h-[120vh] md:h-[100vh] text-white pt-64 md:pt-44 bg-no-repeat"
      >
        <div className="px-10 lg:px-20  flex flex-col gap-9 justify-start">
          <span className="w-64 flex justify-center items-center border p-2 border-white rounded-2xl">
            <h1 className=" text-sm ">Software Development Consulting</h1>
          </span>
          <h1 className="text-5xl lg:text-7xl">
            Future-Driven <br /> Innovations.
          </h1>
          <p className="text-md font-medium">
            Fostering Growth For Startups, Enterprises, And Innovators.
          </p>
          <a href="#" className="relative w-44 text-white text-lg font-medium group">
            Book a 15 min Call
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-36"></span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
