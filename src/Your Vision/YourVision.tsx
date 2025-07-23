import img1 from "../assets/YourVisionImgs/companystats1.svg";
import img3 from "../assets/YourVisionImgs/companystats2.svg";
import img2 from "../assets/YourVisionImgs/companystats3.svg";
import img4 from "../assets/YourVisionImgs/companystats4.svg";
import award1 from "../assets/YourVisionImgs/awards/award (1).svg";
import award2 from "../assets/YourVisionImgs/awards/award (2).svg";
import award3 from "../assets/YourVisionImgs/awards/award (3).svg";
import award4 from "../assets/YourVisionImgs/awards/award (4).svg";
import award5 from "../assets/YourVisionImgs/awards/award (5).svg";
import award6 from "../assets/YourVisionImgs/awards/award (6).svg";
import award7 from "../assets/YourVisionImgs/awards/award (7).svg";
import award8 from "../assets/YourVisionImgs/awards/award (8).svg";
import award11 from "../assets/YourVisionImgs/awards/award (11).svg";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa";

const CompanysStats = [
  { img: img1, title: "300+", text: "Successful Projects" },
  { img: img2, title: "97%", text: "Success Rate" },
  { img: img3, title: "500+", text: "Developers & Engineers" },
  { img: img4, title: "10+", text: "Years of Experience" },
];

const awards = [
  { award: award1 },
  { award: award2 },
  { award: award3 },
  { award: award4 },
  { award: award5 },
  { award: award6 },
  { award: award7 },
  { award: award8 },
  { award: award11 },
];

function YourVision() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="bg-[#050A1F] py-14 px-4 md:px-24 ">
      <div className="bg-white border border-blue-500 rounded-3xl p-8 md:p-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side */}
          <div>
            <h2 className="text-3xl font-bold mb-2">
              Your Vision, Our Expertise
            </h2>
            <p className="text-gray-700 mb-6">
              Submit your information to drive success forward.
            </p>

            {/* Radio Options */}
            <div className="flex gap-6 mb-6">
              {["Staff Augmentation", "Dedicated Teams", "Fixed Gigs"].map(
                (type) => (
                  <label
                    className="flex items-center space-x-2 text-sm font-medium"
                    key={type}
                  >
                    <input
                      type="radio"
                      name="serviceType"
                      value={type}
                      className="accent-blue-600"
                    />
                    <span>{type}</span>
                  </label>
                )
              )}
            </div>

            {/* Form */}
            <form className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  className="w-full border border-gray-300 p-3 rounded-xl"
                  type="text"
                  placeholder="Full name*"
                />
                <input
                  className="w-full border border-gray-300 p-3 rounded-xl"
                  type="text"
                  placeholder="Contact Number*"
                />
              </div>
              <input
                className="w-full border border-gray-300 p-3 rounded-xl"
                type="email"
                placeholder="Email*"
              />
              <input
                className="w-full border border-gray-300 p-3 rounded-xl"
                type="text"
                placeholder="Enter your preferred tech stack..."
              />
              <textarea
                className="w-full border border-gray-300 p-3 rounded-xl"
                rows={6}
                placeholder="Tell us how we can help.*"
              ></textarea>

              <div className="flex justify-between flex-wrap gap-2">
                <div className="flex items-center gap-6 text-sm font-medium text-gray-700">
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="form-checkbox text-blue-600 h-5 w-5"
                    />
                    Get NDA
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="form-checkbox text-blue-600 h-5 w-5"
                    />
                    I agree with{" "}
                    <span className="text-blue-500 underline">T&C</span>
                  </label>
                </div>

                <button className="flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-200">
                  Send Message <FaArrowRight className="text-white" />
                </button>
              </div>
            </form>
          </div>

          {/* Right Side */}
          <div className="bg-[#F4F4F4] p-6 md:p-10 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-6">Company’s Stats</h3>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {CompanysStats.map((stat, i) => (
                <div key={i}>
                  <img src={stat.img} alt="" className="h-16 mb-2" />
                  <h4 className="text-2xl font-bold">{stat.title}</h4>
                  <p className="text-sm text-gray-600">{stat.text}</p>
                </div>
              ))}
            </div>
            <hr />

            <Slider {...settings}>
              {awards.map((award, index) => (
                <div key={index} className="p-2">
                  <img src={award.award} alt="" className="" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourVision;
