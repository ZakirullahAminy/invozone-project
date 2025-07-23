import { FaArrowRight } from "react-icons/fa";
import ServicesCardData from "./ServicesCardData";
import Btn from "../btn/Btn";
import linksData from "./ServicesLinks";

import ServicesIcon from "./ServicesIcon";
function DevelopmentServices() {
  return (
    <>
      <div className="px-10 lg:px-20">
        <div className="flex justify-between items-center">
          <h1 className="text-5xl font-medium md:w-[63%]">
            Software Development Services{" "}
            <span className="text-blue-500">Forward Planners</span>
          </h1>

          <Btn
            color="text-black"
              hoverColor="hover:text-white"
            btnText="View All"
            hoverWidth="group-hover:w-[141px]"
            display="md:flex"
            displaySm="hidden"
          />
        </div>
        {/* Software Development Services section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ServicesCardData.map((data) => (
              <div
                key={data.id}
                className={`border-[0.6px] border-gray-200 rounded-3xl flex flex-col justify-center items-center gap-4 py-7 px-3 ${
                  data.id === 1 ? "bg-blue-500" : "bg-[#F5F5F5]"
                } ${data.id === 1 ? "text-white" : "text-[#19273d]"} `}
              >
                <img className="h-16" src={data.icon} alt="" />
                <h2 className="text-center text-lg font-medium ">
                  {data.title}
                </h2>
              </div>
            ))}
          </div>
          <div>
            <h1 className="text-3xl font-medium mb-4">Product Engineering</h1>
            <p>
              Our Product Engineering Services cover product management, design,
              development, DevOps, testing, security & more.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 mt-5">
              {linksData.map((linkdata) => (
                <a
                  href="#"
                  className="relative text-black text-md font-medium group"
                >
                  <span className="flex items-center ">
                    <span className="bg-blue-500 p-1 rounded-full mr-2">
                      <FaArrowRight className="text-xs text-white " />
                    </span>{" "}
                    {linkdata.linkText}
                  </span>
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-[200px]"></span>
                </a>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 my-5">
              {ServicesIcon.map((icons) => (
                <div key={icons.id}>
                  <img className="h-8" src={icons.icon} alt="" />
                </div>
              ))}
            </div>
            <Btn
              color="text-black"
              hoverColor="hover:text-white"
              btnText="View More"
              hoverWidth="group-hover:w-[162px]"
              display="md:flex"
              displaySm="flex"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default DevelopmentServices;
