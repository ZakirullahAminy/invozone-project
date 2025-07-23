import OurInspiringData from "./OurInspiringData";
function OurInspiring() {
  return (
    <>
      <section className="bg-[#FAFAFA] py-10">
        <div className=" flex flex-col gap-3.5 px-5 lg:px-20">
        
          {OurInspiringData.map((InspiringData) => (
            <div
              key={InspiringData.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 items-center"
            >
              {/* Image Section */}
              <div
                className={`${
                  InspiringData.id === 2 ? "lg:order-2" : "lg:order-1"
                }`}
              >
              <img src={InspiringData.img} alt="" />
              
              </div>

              {/* Text Section */}
              <div
                className={`flex flex-col gap-2.5 ${
                  InspiringData.id === 2 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <h1 className="text-2xl font-medium">{InspiringData.title}</h1>
                <p>{InspiringData.text1}</p>
                <p>{InspiringData.text2}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default OurInspiring;
