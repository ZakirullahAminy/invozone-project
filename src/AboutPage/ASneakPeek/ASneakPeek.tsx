import { useRef } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ASneakPeekData from "./ASneakPeekData";

function ASneakPeek() {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // below 1024px (large -> medium)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // below 640px (medium -> small)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div>
        <div className="px-10 lg:px-20 my-16 ">
          {/* Heading with Buttons */}

          {/* Slider */}
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div className="flex flex-col gap-3 w-full lg:w-[70%] text-center lg:text-start">
              <h2 className="text-2xl lg:text-3xl font-medium">
                A Sneak Peek Into Our Vibrant Culture
              </h2>
              <p>
                Dive into the Heart of Our Culture: Where Collaboration,
                Diversity, and Innovation Thrive, Uniting Individuals and
                Driving Success.
              </p>
              <div className="hidden lg:flex gap-2.5  ">
                <button
                  onClick={() => sliderRef.current?.slickPrev()}
                  className="w-9 h-9 rounded-full shadow-md flex items-center justify-center hover:bg-blue-500 hover:text-white transition"
                >
                  <FaArrowLeft size={14} />
                </button>
                <button
                  onClick={() => sliderRef.current?.slickNext()}
                  className="w-9 h-9 rounded-full shadow-md flex items-center justify-center hover:bg-blue-500 hover:text-white transition"
                >
                  <FaArrowRight size={14} />
                </button>
              </div>
            </div>
            <Slider ref={sliderRef} {...settings}>
              {ASneakPeekData.map((item) => (
                <div key={item.id} className="px-4">
                  {/* Left: Image */}
                  <div className="w-full max-w-sm rounded-xl overflow-hidden">
                    <img
                      src={item.img}
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              ))}
            </Slider>
            <div className="lg:hidden flex justify-center pb-2.5 gap-2.5">
              <button
                onClick={() => sliderRef.current?.slickPrev()}
                className="w-9 h-9 rounded-full shadow-md flex items-center justify-center hover:bg-blue-500 hover:text-white transition"
              >
                <FaArrowLeft size={14} />
              </button>
              <button
                onClick={() => sliderRef.current?.slickNext()}
                className="w-9 h-9 rounded-full shadow-md flex items-center justify-center hover:bg-blue-500 hover:text-white transition"
              >
                <FaArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ASneakPeek;
