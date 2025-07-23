import personImg1 from "../assets/Testimonials/TestimonialsImg (1).png";
import personImg2 from "../assets/Testimonials/TestimonialsImg (2).webp";
import personImg3 from "../assets/Testimonials/TestimonialsImg (3).png";
import personImg4 from "../assets/Testimonials/TestimonialsImg (4).webp";
import personImg5 from "../assets/Testimonials/TestimonialsImg (5).webp";
import companyLogo1 from "../assets/Testimonials/companyLogo (1).png";
import companyLogo2 from "../assets/Testimonials/companyLogo (2).png";
import companyLogo3 from "../assets/Testimonials/companyLogo (3).png";
import companyLogo4 from "../assets/Testimonials/companyLogo (4).png";
import companyLogo5 from "../assets/Testimonials/companyLogo (5).png";





interface TestimonialsData {
  id: number;
  name: string;
  title: string;
  companyLogo: string;
  text: string;
  img:string;
}
const TestimonialsData:TestimonialsData[] = [
 {
    id: 1,
    name: "Chris Dominguez",
    title: "CEO - StorageChain",
    companyLogo: companyLogo1,
    text: "Every member of the InvoZone team has been diligent and focused, fostering a genuine partnership on the technology front.",
    img: personImg1,
  },
  {
    id: 2,
    name: "Sarah Lin",
    title: "CTO - HealthHub",
    companyLogo: companyLogo2,
    text: "Their technical expertise helped us scale quickly without compromising product quality or timelines.",
    img: personImg2,
  },
  {
    id: 3,
    name: "Ahmed Khan",
    title: "Founder - FinVerse",
    companyLogo: companyLogo3,
    text: "We were impressed by their ability to translate our complex financial requirements into a user-friendly solution.",
    img: personImg3,
  },
  {
    id: 4,
    name: "Elena Rossi",
    title: "Product Manager - EduNow",
    companyLogo: companyLogo4,
    text: "InvoZone delivered a high-performing education app under tight deadlines. Amazing experience!",
    img: personImg4,
  },
  {
    id: 5,
    name: "Jackson Lee",
    title: "COO - GreenTech",
    companyLogo: companyLogo5,
    text: "Their strategic thinking and attention to detail elevated our green initiative platform to the next level.",
    img: personImg5,
  },

  ];
  export default TestimonialsData