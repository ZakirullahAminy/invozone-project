import { useRef } from "react";
import Slider from "react-slick";
import { FaPlay, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialsData from "./TestimonialsData";
import { ImQuotesRight } from "react-icons/im";
import company1 from "../assets/Testimonials/companyLogo (1).png";
import company2 from "../assets/Testimonials/companyLogo (2).png";
import company3 from "../assets/Testimonials/companyLogo (3).png";
import company4 from "../assets/Testimonials/companyLogo (4).png";
import company5 from "../assets/Testimonials/companyLogo (5).png";
const companyLogos = [company1, company2, company3, company4, company5];
function Testimonials() {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <div>
        <div className="px-10 lg:px-20 mt-16 ">
          {/* Heading with Buttons */}
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-xl md:text-3xl font-medium">
              Partner’s <span className="text-blue-500">Success</span> Stories
            </h2>
            <div className="flex gap-3">
              <button
                onClick={() => sliderRef.current?.slickPrev()}
                className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-500 hover:text-white transition"
              >
                <FaArrowLeft size={14} />
              </button>
              <button
                onClick={() => sliderRef.current?.slickNext()}
                className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-500 hover:text-white transition"
              >
                <FaArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Slider */}
          <Slider ref={sliderRef} {...settings}>
            {TestimonialsData.map((item) => (
              <div key={item.id}>
                <div className="flex flex-col lg:flex-row justify-center gap-10 items-center md:items-start">
                  {/* Left: Image */}
                  <div className="relative w-full max-w-sm rounded-xl overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="object-cover w-full h-full"
                    />
                    <button className="absolute bottom-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm hover:bg-blue-700 transition">
                      <FaPlay className="text-xs" />
                      Play Video
                    </button>
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1 relative pt-4">
                    {item.companyLogo && (
                      <img
                        src={item.companyLogo}
                        alt="Company Logo"
                        className="mb-4 h-6"
                      />
                    )}
                    <h3 className="text-lg font-bold">
                      Chris <span className="text-blue-600">Dominguez</span>
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{item.title}</p>

                    <p className="text-gray-700 mt-6 max-w-xl leading-relaxed">
                      {item.text}
                    </p>

                    <a
                      href="#"
                      className="relative text-blue-500 text-sm font-medium group w-14 mt-10"
                    >
                      <span className="flex items-center">View Case Study</span>
                      <span className="absolute left-0  -bottom-1 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-28"></span>
                    </a>

                    {/* Quote marks as background */}
                    <ImQuotesRight className="text-[#EDF4FF] h-[15rem] absolute top-32 right-36 w-[15rem]  hidden lg:block" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex flex-wrap justify-between my-12 bg-[#F7F7F7] py-5 px-3">
          {companyLogos.map((src, idx) => (
            <div className="flex items-center gap-10 flex-wrap " key={idx}>
              <img src={src} alt="" />
              <div className="bg-[#496FAD] h-[10px] w-[10px] rounded-full "></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Testimonials;
