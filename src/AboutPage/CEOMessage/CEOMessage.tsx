import ceoImg from "../../assets/About imgs/ceo/CEO.svg";
function CEOMessage() {
  return (
    <>
      <section className="bg-[#FAFAFA] pt-10">
        <div className="px-5 md:px-20">
          <div className="flex justify-center p-5 flex-col-reverse gap-2.5 lg:flex-row bg-white shadow-sm rounded-xl">
            <div className="  w-full lg:w-[70%]  flex flex-col gap-1.5 ">
              <h2 className="text-2xl font-medium">Message From The CEO</h2>
              <div className="flex flex-col gap-3">
                <p>Hey Everyone,</p>{" "}
                <p>
                  Welcome to InvoZone, your trusted partner for software
                  development and consultancy. I'm Furqan Aziz, the CEO of this
                  esteemed company, and I'm excited to share our story and
                  vision with you.
                </p>{" "}
                <p>
                  At InvoZone, we believe in the power of software to transform
                  industries and unlock boundless possibilities. Our team of
                  exceptional professionals, specializing in technologies like
                  Elixir, Laravel, ROR, AI/ML,and more, is here to drive your
                  digital transformation journey.
                </p>
                <p>
                  We go beyond being just developers; we're your strategic
                  partners. We tailor solutions to ensure your success, foster
                  long-lasting partnerships, and deliver top-notch software. Our
                  innovative mindset keeps us at the forefront of the
                  ever-evolving tech landscape.
                </p>
                <p>
                  Integrity and transparency are the cornerstones of our
                  culture. We earn your trust by delivering excellence and
                  practicing open communication. Moreover, we actively support
                  social causes and embrace sustainable practices to make a
                  positive impact on our world.
                </p>
                <p>
                  Let's shape the future together through technology. Choose
                  InvoZone for exceptional results and leverage our resource
                  augmentation or remote teams of software developers.
                </p>
                <p>
                  Join us on this exciting journey, and let's make a difference
                  together.
                </p>
              </div>
            </div>
            {/* img */}
            <div className="bg-blue-500 rounded-xl p-14 flex flex-col justify-center items-center text-center gap-6 text-white">
              <img src={ceoImg} alt="" />
              <p className="text-2xl font-medium  ">Furqan Aziz</p>
              <p className="font-medium">
                CEO of InvoZone , InvoBlox, InvoGames
              </p>
              <div className="flex">

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CEOMessage;
