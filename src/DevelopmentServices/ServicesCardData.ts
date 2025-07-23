import icon1 from "../assets/ServicesCardData/ProductEngineering.png"
import icon2 from "../assets/ServicesCardData/Data.svg"
import icon3 from "../assets/ServicesCardData/Emerging.svg"
import icon4 from "../assets/ServicesCardData/HireDev.svg"
import icon5 from "../assets/ServicesCardData/blockchain.svg"
import icon6 from "../assets/ServicesCardData/cloudDevOps.svg"


export interface ServicesCardData {
  id: number;
  title: string;
  icon: string;
}

const ServicesCardData: ServicesCardData[] = [
  {
    id: 1,
    title: "Product Engineering",
    icon: icon1,
  },
  {
    id: 2,
    title: "Data & Artificial Intelligence",
    icon: icon2,
  },
    {
    id: 3,
    title: "Hire Dev",
    icon: icon4,
  },
    {
    id: 4,
    title: "DevOps & CloudOps",
    icon: icon6,
  },

    {
    id: 5,
    title: "Emerging Technologies",
    icon: icon3,
  },
    {
    id: 6,
    title: "Blockchain & Web 3.0",
    icon: icon5,
  },
];

export default ServicesCardData;

