import Btn from "../btn/Btn";
import img from "../assets/CaseStudyImgs/CaseStudyImg (1).webp";
import logo1 from "../assets/CaseStudyImgs/CaseStudylogo (1).png";
import Slider from "react-slick";
const CaseStudyData = [
  {
    id: 1,
    title: "Food Delivery & Retail",
    description:
      "Quick & effective resource augmentation for agile development",
    img: img,
    logo: logo1,
    btnText: "Application Modernisation",
  },
  {
    id: 1,
    title: "Food Delivery & Retail",
    description:
      "Quick & effective resource augmentation for agile development",
    img: img,
    logo: logo1,
    btnText: "Application Modernisation",
  },
  {
    id: 1,
    title: "Food Delivery & Retail",
    description:
      "Quick & effective resource augmentation for agile development",
    img: img,
    logo: logo1,
    btnText: "Application Modernisation",
  },
];
function CaseStudy() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 3, // default (for large screens)
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // below 1024px (large -> medium)
        settings: {
          slidesToShow: 1,
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
      <div className="px-10 lg:px-20 pt-12 ">
        {/* Heading with Buttons */}
        <div className="flex justify-between flex-wrap items-center gap-3 mb-12">
          <h1 className="text-lg md:text-3xl font-medium">
            <span className="text-blue-500">Case Study</span> We Don't Just
            Talk, We Deliver Results
          </h1>
          <Btn
            color="text-black"
            hoverColor="hover:text-white"
            btnText="View All"
            hoverWidth="group-hover:w-[141px]"
            display="md:flex"
            displaySm="flex"
          />
        </div>
        <Slider {...settings}>
          {CaseStudyData.map((cardItem) => (
          <div className="flex gap-3 justify-center">
              <div className="group relative w-96 h-64 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ">
              <img
                src={cardItem.img}
                alt="Card"
                className="w-full h-full object-cover absolute inset-0 z-0"
              />
              <button className="absolute top-3 right-3 cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-md text-xs hover:bg-blue-700 transition">
                {cardItem.btnText}
              </button>
              <div className="absolute bottom-0 left-0 w-full z-20 p-5 bg-gradient-to-t from-black/80 to-transparent text-white transition-all duration-500 ease-in-out max-h-28 group-hover:max-h-96 overflow-hidden ">
                <h3 className="text-xl font-bold mb-2">{cardItem.title}</h3>
                <p className="text-sm">{cardItem.description}</p>
                <div className="mt-2">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <hr />
                    <img className="mt-3" src={cardItem.logo} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          ))}

          {/* card */}
        </Slider>
      </div>
    </>
  );
}
export default CaseStudy;
