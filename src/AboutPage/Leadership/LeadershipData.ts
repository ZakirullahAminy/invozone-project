import Leadership1 from "../../assets/About imgs/Leadership/Leaderships (1).jpg";
import Leadership2 from "../../assets/About imgs/Leadership/Leaderships (1).png";
import Leadership3 from "../../assets/About imgs/Leadership/Leaderships (1).webp";
import Leadership4 from "../../assets/About imgs/Leadership/Leaderships (2).jpg";
import Leadership5 from "../../assets/About imgs/Leadership/Leaderships (2).webp";
import Leadership6 from "../../assets/About imgs/Leadership/Leaderships (3).jpg";
import Leadership7 from "../../assets/About imgs/Leadership/Leaderships (3).webp";

export interface LeadershipMember {
  id: number;
  img: string;
  name: string;
  position: string;
}
const LeadershipData: LeadershipMember[] = [
  {
    id: 1,
    img: Leadership1,
    name: "Furqan Aziz",
    position: "Chief Executive Officer",
  },
  {
    id: 2,
    img: Leadership2,
    name: "Hareem Mohsin",
    position: "Chief Operating Officer",
  },
  {
    id: 3,
    img: Leadership3,
    name: "Khadija Arshad",
    position: "Head of Engineering",
  },
  {
    id: 4,
    img: Leadership4,
    name: "Rehan Ahmad Khan",
    position: "HR Manager",
  },
  {
    id: 5,
    img: Leadership5,
    name: "Rimil Zahra",
    position: "Head of Dynamic Sales & Marketing",
  },
  {
    id: 6,
    img: Leadership6,
    name: "Zofishan Aimen",
    position: "Head of Fast Sales & Marketing",
  },
  {
    id: 7,
    img: Leadership7,
    name: "Asfand Yarr",
    position: "Head of Corporate Sales",
  },
];

export default LeadershipData;
