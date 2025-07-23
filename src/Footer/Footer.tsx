import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import footerLinks from "./footerData";
import Review1 from "../assets/footerImgs/ReviewsIcons/Reviews (1).svg";
import Review2 from "../assets/footerImgs/ReviewsIcons/Reviews (2).svg";
import Review3 from "../assets/footerImgs/ReviewsIcons/Reviews (3).svg";
import Review4 from "../assets/footerImgs/ReviewsIcons/Reviews (4).svg";
import YourVision from "../Your Vision/YourVision";
const ReviewIcons = [
  { id: 1, Icon: Review1 },
  { id: 2, Icon: Review2 },
  { id: 3, Icon: Review3 },
  { id: 4, Icon: Review4 },
];
function Footer() {
  return (
    <>
    <YourVision />
      <div className="bg-[#050A1F] text-white border-t-[1px] border-white">
        <div className="px-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-6 gap-5">
            {/* 1 col */}
            <div>
              <div className="backdrop-blur-md bg-white/1 border p-4 border-white/20 rounded-2xl shadow-xl">
                <div className="flex items-center gap-1.5">
                  <div className="p-2 bg-blue-600 rounded-full">
                    <IoCall />
                  </div>
                  <div className="text">
                    <p>Direct Call</p>
                    <p className="text-sm">+173489594847</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 backdrop-blur-md border-b py-4 border-white/20  shadow-xl">
                  <div className="p-2 bg-blue-600 rounded-full">
                    <MdEmail />
                  </div>
                  <div className="">
                    <p>Email</p>
                    <p className="text-sm">sales@invozone.com</p>
                  </div>
                </div>
                <p className="pt-2">⭐ 5 Star Reviews</p>
                <div className="flex gap-2 backdrop-blur-md border-b py-4 border-white/20  shadow-xl">
                  {ReviewIcons.map((icons) => (
                    <div key={icons.id}>
                      <img src={icons.Icon} alt="" />
                    </div>
                  ))}
                </div>
                <p className="pt-2">Our Socials</p>
                <div className="flex gap-2 py-2">
                  {ReviewIcons.map((icons) => (
                    <div key={icons.id}>
                      <img src={icons.Icon} alt="" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* 2 col */}

            {footerLinks.map((links) => (
              <div>
                <h3 className="text-xl font-medium">{links.category}</h3>
                {links.links.map((link) => (
                  <ul className="" key={link.id}>
                    <li className="py-1">
                      <a className="text-gray-300 group relative" href="#">
                        {link.link}
                        <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    </li>
                  </ul>
                ))}
              </div>
            ))}
          </div>
          <div className="bg-blue-500 text-white flex flex-wrap justify-between p-3 rounded-t-2xl mt-3">
            <h1>© 2025 All Rights Reserved By InvoZone </h1>
            <ul className="flex flex-wrap gap-1">
              <li>
                <a href="#">Sitemap</a>
              </li>
              <li>
                | <a href="#">Privacy Policy</a>
              </li>
              <li>
                {" "}
                | <a href="#">IMS Policy</a>{" "}
              </li>
              <li>
                | <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
