import { useRef } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ExpertiseData from "./ExpertiseData";
import Btn from "../btn/Btn";

function Expertise() {
  const sliderRef = useRef<Slider | null>(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4, // default (for large screens)
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
      <div className="bg-[#FAFAFA] mt-14 pb-14 ">
        <div className="px-10 lg:px-20 pt-12">
          {/* Heading with Buttons */}
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-xl md:text-3xl font-medium">
              Expertise in Software Development Across{" "}
              <span className="text-blue-500">Multiple</span>{" "}
            </h1>
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
            {ExpertiseData.map((item) =>
              item.ExpertiseCardData.map((card) => (
                <div className="relative bg-[#F1F1F1] group border-[1px] border-[#d8d8d8] group rounded-xl">
                  <img
                    className="opacity-0 group-hover:opacity-100 duration-1000 transition-all w-full"
                    src={card.cardImg}
                    alt=""
                  />
                  <div className="absolute bottom-10 left-8">
                    <h1 className="text-black group-hover:text-white text-lg md:text-xl font-medium mb-5">
                      {" "}
                      {card.title}
                    </h1>
                    {card.listItems.map((listItem) => (
                      <ul className="ml-0">
                        <li className="list-disc text-[#8492a7] group-hover:text-white">
                          {listItem.listItem}
                        </li>
                      </ul>
                    ))}
                    <div className="mt-5">
                      <Btn
                        color="text-white"
                        hoverColor="hover:text-white"
                        btnText="View All"
                        hoverWidth="group-hover:w-[141px]"
                        display="md:flex"
                        displaySm="flex"
                      />
                    </div>
                  </div>
                </div>
              ))
            )}
          </Slider>
        </div>
      </div>
    </>
  );
}
export default Expertise;
