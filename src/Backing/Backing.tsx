import BackingCardData from "./BackingCardData";
import bgImg from "../assets/cardBgImgs/bannerBg.webp";
import Btn from "../btn/Btn";
function Backing() {
  return (
    <>
      <div className="bg-[#F7F7F7] ">
        <div className="px-10 lg:px-20 py-20 mt-9">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-medium mb-6 text-center">
              Backing Your Up At{" "}
              <span className="text-blue-500">
                Every Stage Of Your Progress
              </span>
            </h1>
            <p className="w-full md:w-[60%] text-center text-[#365478]">
              From launching startups to expanding enterprises, or recovering
              from setbacks, we help businesses overcome every challenge on
              their journey.
            </p>
          </div>
          {/* Backing cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 md:gap-3 mt-20">
            {BackingCardData.map((cardData) => (
              <div key={cardData.id} className="rounded-2xl relative  hover:-translate-y-6 transition  duration-500">
                <img src={cardData.bgImg} alt="" />
                <div className="absolute top-10 left-10 right-0 flex flex-col gap-10 md:gap-12 ">
                  <div>
                    <h1
                      className={`text-4xl font-medium ${
                        cardData.id === 2 ? "text-white" : "text-blue-500"
                      }`}
                    >
                      {cardData.title1}
                    </h1>
                    <h1
                      className={`text-4xl font-bold ${
                        cardData.id === 2 ? "text-white" : "text-blue-500"
                      }`}
                    >
                      {cardData.title2}
                    </h1>
                  </div>
                  <p
                    className={` ${
                      cardData.id === 2 ? "text-white" : "text-black"
                    }`}
                  >
                    {cardData.text}
                  </p>
                  <div>
                    {" "}
                    <Btn
                      color="text-black"
                      hoverColor="hover:text-white"
                      btnText="View All"
                      hoverWidth="group-hover:w-[141px]"
                      display="md:flex"
                      displaySm="flex"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="rounded-xl p-14 flex items-center justify-between"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <h1 className="text-white text-2xl md:text-3xl font-medium">
            Got An Idea Or Concerns? <br /> Let’s Discuss.
          </h1>
          <div>
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

export default Backing;
