import { FaArrowRight } from "react-icons/fa";
interface BtnProps {
  btnText: string;
  hoverWidth: string;
  display: string;
  displaySm: string;
  color: string;
  hoverColor: string;
}

function Btn({
  btnText,
  hoverWidth = "group-hover:w-[145px]",
  display = "md:flex",
  displaySm = "hidden",
  color = "text-black",
  hoverColor = "hover:text-white",
}: BtnProps) {
  return (
    <>
      <button
        className={`${display} ${displaySm}  items-center relative  border-gray-400 border-[1px] ${color}  ${hoverColor} rounded-full px-7 py-3 transition-all duration-200 bg-transparent cursor-pointer group active:scale-95`}
      >
        <span className="relative font-ubuntu text-lg font-medium tracking-wide  ">
          {btnText}
        </span>
        <FaArrowRight className="relative top-0  ml-2 w-[15px] h-[10px] stroke-white text-white stroke-2 group-hover:translate-x-0 transform -translate-x-[-10px] transition-all duration-300" />

        <span
          className={`absolute top-[3px] right-[3px] w-[45px] h-[45px] rounded-full bg-blue-500 transition-all duration-300 ${hoverWidth} -z-10`}
        ></span>
      </button>
    </>
  );
}

export default Btn;
