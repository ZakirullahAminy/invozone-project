import cardImg1 from "../assets/ExpertiseImg/cardImg (1).webp";
import cardImg2 from "../assets/ExpertiseImg/cardImg (2).webp";
import cardImg3 from "../assets/ExpertiseImg/cardImg (3).webp";
import cardImg4 from "../assets/ExpertiseImg/cardImg (4).webp";
import cardImg5 from "../assets/ExpertiseImg/cardImg (5).webp";
import cardImg6 from "../assets/ExpertiseImg/cardImg (6).webp";
import cardImg7 from "../assets/ExpertiseImg/cardImg (7).webp";
import cardImg8 from "../assets/ExpertiseImg/cardImg (8).webp";
import cardImg9 from "../assets/ExpertiseImg/cardImg (9).webp";
interface listItems {
  listItem: string;
}
interface ExpertiseCardData {
  id: number;
  cardImg: string;
  title: string;
  listItems: listItems[];
}
interface ExpertiseCardsData {
  id: number;
  ExpertiseCardData: ExpertiseCardData[];
}

const ExpertiseCardsData: ExpertiseCardsData[] = [
  {
    id: 1,
    ExpertiseCardData: [
      {
        id: 1,
        cardImg: cardImg1,
        title: "Web Development",
        listItems: [
          { listItem: "HTML & CSS" },
          { listItem: "JavaScript & TypeScript" },
          { listItem: "React & Angular" },
          { listItem: "Responsive Design" },
          { listItem: "Performance Optimization" },
          { listItem: "SEO Best Practices" },
        ],
      },
      {
        id: 2,
        cardImg: cardImg2,
        title: "Mobile Development",
        listItems: [
          { listItem: "React Native" },
          { listItem: "Flutter" },
          { listItem: "Swift (iOS)" },
          { listItem: "Kotlin (Android)" },
          { listItem: "Cross-platform Tools" },
          { listItem: "UI/UX Design" },
        ],
      },
       {
        id: 3,
        cardImg: cardImg3,
        title: "Mobile Development",
        listItems: [
          { listItem: "React Native" },
          { listItem: "Flutter" },
          { listItem: "Swift (iOS)" },
          { listItem: "Kotlin (Android)" },
          { listItem: "Cross-platform Tools" },
          { listItem: "UI/UX Design" },
        ],
      },
       {
        id: 4,
        cardImg: cardImg4,
        title: "Mobile Development",
        listItems: [
          { listItem: "React Native" },
          { listItem: "Flutter" },
          { listItem: "Swift (iOS)" },
          { listItem: "Kotlin (Android)" },
          { listItem: "Cross-platform Tools" },
          { listItem: "UI/UX Design" },
        ],
      },
    ],
  },
 {
    id: 2,
    ExpertiseCardData: [
      {
        id: 1,
        cardImg: cardImg5,
        title: "Web Development",
        listItems: [
          { listItem: "HTML & CSS" },
          { listItem: "JavaScript & TypeScript" },
          { listItem: "React & Angular" },
          { listItem: "Responsive Design" },
          { listItem: "Performance Optimization" },
          { listItem: "SEO Best Practices" },
        ],
      },
      {
        id: 2,
        cardImg: cardImg6,
        title: "Mobile Development",
        listItems: [
          { listItem: "React Native" },
          { listItem: "Flutter" },
          { listItem: "Swift (iOS)" },
          { listItem: "Kotlin (Android)" },
          { listItem: "Cross-platform Tools" },
          { listItem: "UI/UX Design" },
        ],
      },
       {
        id: 3,
        cardImg: cardImg7,
        title: "Mobile Development",
        listItems: [
          { listItem: "React Native" },
          { listItem: "Flutter" },
          { listItem: "Swift (iOS)" },
          { listItem: "Kotlin (Android)" },
          { listItem: "Cross-platform Tools" },
          { listItem: "UI/UX Design" },
        ],
      },
       {
        id: 4,
        cardImg: cardImg8,
        title: "Mobile Development",
        listItems: [
          { listItem: "React Native" },
          { listItem: "Flutter" },
          { listItem: "Swift (iOS)" },
          { listItem: "Kotlin (Android)" },
          { listItem: "Cross-platform Tools" },
          { listItem: "UI/UX Design" },
        ],
      },
    ],
  },
];

export default ExpertiseCardsData;
