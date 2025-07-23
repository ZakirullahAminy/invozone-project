import ShapingFutureImg from "../../assets/About imgs/ShapingFuture/ShapingFuture.svg";

import ShapingFutureData1 from "./ShapingFutureData1";
import ShapingFutureData2 from "./ShapingFutureData2";
function ShapingFuture() {
  return (
    <>
      <div className="px-10 lg:px-20 mb-12 hidden lg:block">
        <div className="flex flex-col justify-center items-center gap-3">
          <h2 className="text-black text-4xl font-medium text-center">
            InvoZone: Shaping The Future With Milestones Of Innovation
          </h2>
          <p className="text-gray-500  text-center">
            Through years of pioneering progress, we continue to forge ahead,
            crafting an inspiring and transformative journey.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
          <div className="flex flex-col gap-[17.3rem] mt-52">
            {ShapingFutureData1.map((Data) => (
              <div key={Data.id} className="">
                <strong>{Data.date}</strong>
                <p>{Data.text}</p>
              </div>
            ))}
          </div>
          <div>
            <img src={ShapingFutureImg} alt="" />
          </div>
          <div className="flex flex-col gap-[17rem] mt-10">
            {ShapingFutureData2.map((Data2) => (
              <div key={Data2.id} className="">
                <strong>{Data2.date}</strong>
                <p>{Data2.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ShapingFuture;
