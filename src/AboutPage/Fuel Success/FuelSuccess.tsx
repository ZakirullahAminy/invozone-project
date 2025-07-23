import icon1 from "../../assets/About imgs/Fuel Success/Fuel Success (1).svg";
import icon2 from "../../assets/About imgs/Fuel Success/Fuel Success (2).svg";
import icon3 from "../../assets/About imgs/Fuel Success/Fuel Success (3).svg";
const FuelSuccessData = [
  {
    id: 1,
    icon: icon1,
    title: "Staff Augmentation",
  },
  {
    id: 2,
    icon: icon2,
    title: "Dedicated Teams",
  },
  {
    id: 3,
    icon: icon3,
    title: "Product Development",
  },
];
function FuelSuccess() {
  return (
    <>
      <div className="px-10 lg:px-20 mb-12 ">
        <div className="bg-blue-500 rounded-2xl flex flex-col gap-3 justify-center items-center py-8 px-8">
          <h1 className="text-white text-4xl w-full lg:w-[60%] font-medium text-center">
            Fuel Success Through Collaboration With Our Engagement Models
          </h1>
          <p className="text-white  w-full lg:w-[60%] text-center">
            Experience a development journey like never before with our dynamic
            engagement models, ensuring a stress-free path to growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 lg:grid-cols-3 -mb-16">
            {FuelSuccessData.map((SuccessData) => (
              <div
                className="bg-white py-8 px-14 rounded-2xl flex flex-col justify-center items-center shadow-xl"
                key={SuccessData.id}
              >
                <img src={SuccessData.icon} alt="" />
                <p className="font-medium">{SuccessData.title}</p>
              </div>
            ))}
          </div>
        </div>{" "}
        <div className="flex justify-center mt-20">
          <button className="bg-[#FFDB53] rounded-3xl px-8 py-2.5 text-black text-center">
            Secure A Free Quote Today
          </button>
        </div>
      </div>
    </>
  );
}

export default FuelSuccess;
