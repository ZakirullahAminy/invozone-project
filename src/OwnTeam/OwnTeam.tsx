import { useState } from "react";
import tabs from "./OwnTeamTabData";

function OwnTeam() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <>
      <div className="px-10 lg:px-20 pt-12 ">
        <div className="flex justify-between flex-wrap items-center gap-3 mb-12">
          <div>
            <h1 className="text-lg md:text-3xl font-medium">
              Build Your Own Team -
              <span className="text-blue-500">Hire Developer</span>
            </h1>
            <p>
              We've built our business by assembling a team of skilled
              developers, experts in the frameworks and technologies driving
              modern solutions.
            </p>
          </div>
          <input placeholder="What are you looking for?" type="text" />
        </div>{" "}
        {/* cards */}
        <div className="p-12 rounded-2xl bg-[#FAFAFA] ">
          {/* Tabs */}
          <div className="flex flex-wrap  border border-gray-200 rounded-full overflow-hidden mb-2">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                className={`px-[19.5px] md:px-6 py-2 font-medium text-lg md:text-xl transition duration-200
        ${
          activeTab.id === tab.id
            ? "bg-blue-500 text-white"
            : "text-gray-700 hover:text-blue-500"
        }
        ${index !== 0 ? "border-l border-gray-200" : ""}
      `}
                onClick={() => setActiveTab(tab)}
              >
                {tab.tab}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="overflow-y-auto">
            <div className="max-h-[350px]">
              <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-14 mt-10">
                {activeTab.icons.map((icon) => (
                  <div
                    key={icon.id}
                    className="flex flex-col justify-center items-center gap-2"
                  >
                    <img src={icon.icon} alt="" />
                    <h1 className="text-md font-medium text-center">
                      {icon.title}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OwnTeam;
