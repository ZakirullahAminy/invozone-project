import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product1 from "../assets/ProductsDeveloped/ProductsDeveloped (1).png";
import product2 from "../assets/ProductsDeveloped/ProductsDeveloped (2).png";
import product3 from "../assets/ProductsDeveloped/ProductsDeveloped (3).png";
import product4 from "../assets/ProductsDeveloped/ProductsDeveloped (4).png";
import product5 from "../assets/ProductsDeveloped/ProductsDeveloped (5).png";
import product6 from "../assets/ProductsDeveloped/ProductsDeveloped (6).png";
import product7 from "../assets/ProductsDeveloped/ProductsDeveloped (7).png";
import product8 from "../assets/ProductsDeveloped/ProductsDeveloped (8).png";
const imageUrls = [
product1,
product2,
product3,
product4,
product5,
product6,
product7,
product8,

 
];

function ProductsDeveloped() {
 const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };
  return (
    <>
      <div className="px-10 lg:px-20 py-20 flex flex-col gap-9 justify-start pt-44">
        <div className="flex justify-center">
          <p className="text-center text-md font-medium ">
            <span className="text-blue-500"> 400+ </span> Products Developed For{" "}
            <span className="text-blue-500"> 300+ </span>
            Customers Across <span className="text-blue-500">120+ </span>
            Countries.
          </p>
        </div>
        <div className="">
          <Slider {...settings}>
            {imageUrls.map((src, idx) => (
              <div key={idx} className="flex gap-4">
                
                  <img
                    src={src}
                    alt={`Slide ${idx + 1}`}
                    className="h-10 "
                  />
                
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default ProductsDeveloped;
// src/components/AutoSlider.tsx
