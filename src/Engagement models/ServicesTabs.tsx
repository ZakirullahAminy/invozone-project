import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import video1 from "../assets/ServicesTabs/Managed IT Systems video.webm";
import video2 from "../assets/ServicesTabs/Product Development video.webm";
import video3 from "../assets/ServicesTabs/Team Augmentation video.webm";
import Btn from "../btn/Btn";

const tabs = [
  {
    id: "product-dev",
    title: "Product Development",
    description: "Transforming your ideas into ready-to-launch products.",
    video: video1,
    points: [
      "Early Growth Stage or Stealth Startup.",
      "Product Development Roadmap",
      "MVP Development",
      "Prototypes / POC",
    ],
  },
  {
    id: "managed-it",
    title: "Managed IT Systems",
    description: "Reliable infrastructure and operations for growing teams.",
    video: video2,
    points: [
      "Cloud Migration & Setup",
      "Ongoing Maintenance",
      "Monitoring & Reporting",
      "Disaster Recovery Planning",
    ],
  },
  {
    id: "team-aug",
    title: "Team Augmentation",
    description: "Add skilled professionals to scale your engineering team.",
    video: video3,
    points: [
      "On-demand Developer Hiring",
      "Dedicated Project Teams",
      "Flexible Contracts",
      "Technical Leadership Support",
    ],
  },
];

function ServicesTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="px-6 lg:px-20 ">
      <div className="p-12 rounded-2xl bg-[#FAFAFA] ">
        {/* Tabs */}
        <div className="flex justify-between border-b border-gray-200 mb-8 ">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`pb-3 font-semibold text-sm md:text-base relative transition duration-200 ${
                activeTab.id === tab.id
                  ? "text-black after:absolute after:bottom-0 after:left-0 after:h-[4px] rounded after:w-full after:bg-blue-500"
                  : "text-gray-500 hover:text-blue-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 ">
          <div className="flex-1">
            <h2 className="text-xl font-bold">{activeTab.title}</h2>
            <p className="mt-2 mb-6 text-gray-700">{activeTab.description}</p>
            <ul className="flex flex-col gap-4 mb-8">
              {activeTab.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="text-blue-500 mt-1" />
                  <span className="text-gray-800">{point}</span>
                </li>
              ))}
            </ul>

            <Btn
              color="text-black"
              hoverColor="hover:text-white"
              btnText="View Details"
              hoverWidth="group-hover:w-[141px]"
              display="md:flex"
              displaySm="flex"
            />
          </div>

          {/* Right Side Image */}
          <div className="flex-1 flex justify-center">
            <video autoPlay loop src={activeTab.video}></video>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ServicesTabs;
