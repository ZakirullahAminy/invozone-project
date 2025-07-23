import bgImg1 from "../assets/cardBgImgs/cardBgImg (2).png";
import bgImg2 from "../assets/cardBgImgs/cardBgImg (1).png";
import bgImg3 from "../assets/cardBgImgs/cardBgImg (3).png";

interface BackingCardData {
  id: number;
  bgImg: string;
  title1: string;
  title2: string;
  text: string;
}
const BackingCardData: BackingCardData[] = [
  {
    id: 1,
    bgImg: bgImg1,
    title1: "I'm A",
    title2: "StartUp",
    text: "Remarkable ideas often stall without the right team to bring them to life",
  },
  {
    id: 2,
    bgImg: bgImg2,
    title1: "I'm An",
    title2: "Enterprise.",
    text: "Scaling without the right infrastructure and expertise can lead to costly bottlenecks.",
  },
  {
    id: 3,
    bgImg: bgImg3,
    title1: "I'm A",
    title2: "Rescue.",
    text: "A messy codebase and tech debt are suffocating your progress.",
  },
];
export default BackingCardData;
