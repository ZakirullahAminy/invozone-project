import LeadershipMemberData from "./LeadershipData";
import { MdOutlineEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
function Leadership() {
  return (
    <>
      <div className="bg-blue-500 flex flex-wrap justify-between items-center gap-2 py-7 px-10 lg:px-20">
        <p className="text-xl md:text-2xl font-medium text-white">
          Find A Perfect Fit With Our Customized Solutions
        </p>
        <a
          href="#"
          className="bg-black px-2 py-1 text-white font-medium rounded-2xl "
        >
          Discover Your Advantage
        </a>
      </div>
      <div className="px-10 lg:px-20 my-16 ">
        <div className="flex flex-col justify-center items-center gap-2.5 py-4">
          <h1 className="text-center text-4xl font-medium">
            Meet Our Dynamic Leadership
          </h1>
          <p className="text-center w-full md:w-[50%]">
            Take a closer look at the faces behind our success! Meet our
            accomplished leaders who inspire, empower, and drive us towards
            excellence, everyday!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-3">
          {LeadershipMemberData.map((LeadershipMember) => (
            <div key={LeadershipMember.id} className="group">
              <div className="relative  ">
                <div className="h-64 w-64 border-4 rotate-90 group-hover:rotate-180 duration-500 transition rounded-full border-t-blue-500 border-b-blue-500 border-l-blue-100 border-r-blue-100"></div>
                {/* img div */}
                <img
                  src={LeadershipMember.img}
                  className="absolute top-2 left-2 border-2 border-black h-60 w-60 rounded-full transition-all duration-500 ease-in-out group-hover:grayscale-0 grayscale"
                  alt=""
                />
                <div
                  style={{ backgroundImage: `url(${LeadershipMember.img})` }}
                  className=" flex justify-center items-center bg-no-repeat absolute top-2 left-2 border-2 border-black h-60 w-60 rounded-full"
                >
                  <div className="hidden group-hover:flex transition-all duration-500 ease-in-out justify-center items-center gap-1.5">
                    <span className="p-2.5 rounded-full bg-white">
                      {" "}
                      <a href="#">
                        <FaLinkedinIn size={15} className="text-blue-500" />{" "}
                      </a>
                    </span>
                    <span className="p-2.5 rounded-full bg-white">
                      <a href="#">
                        <MdOutlineEmail size={15} className="text-blue-500" />{" "}
                      </a>
                    </span>
                    <span className="p-2.5 rounded-full bg-white">
                      <a href="#">
                        <FaXTwitter size={15} className="text-blue-500" />{" "}
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className=" font-medium">{LeadershipMember.name}</h1>
                <h1 className="group-hover:text-black font-medium transition-all duration-500 ease-in-out text-gray-600">
                  {LeadershipMember.position}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Leadership;
