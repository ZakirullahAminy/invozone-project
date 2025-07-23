interface FooterLink {
  id: number;
  link: string;
}

interface FooterCategory {
  category: string;
  links: FooterLink[];
}

const footerLinks: FooterCategory[] = [
  {
    category: "Services",
    links: [
      { id: 1, link: "Web App Development" },
      { id: 2, link: "Mobile App Development" },
      { id: 3, link: "Enterprise App Development" },
      { id: 4, link: "AI Development Services" },
      { id: 5, link: "DevOps Services" },
      { id: 6, link: "Software Quality Assurance" },
      { id: 7, link: "UIUX Design Services" },
      { id: 8, link: "Product Development Services" }
    ],
  },
  {
    category: "Hire Developers",
    links: [
      { id: 1, link: "Ebar Developer" },
      { id: 2, link: "MERN Stack Developer" },
      { id: 3, link: "Node.Js Developer" },
      { id: 4, link: "Python Developer" },
      { id: 5, link: "RCR Developer" },
      { id: 6, link: "Flutter Developer" },
      { id: 7, link: "React.Js Developer" },
      { id: 8, link: "SaaS Developer" }
    ],
  },
  {
    category: "Industry",
    links: [
      { id: 1, link: "Fintech" },
      { id: 2, link: "Ecommerce" },
      { id: 3, link: "On-Demand" },
      { id: 4, link: "Real Estate" },
      { id: 5, link: "Healthcare" },
      { id: 6, link: "Food & Grocery" },
      { id: 7, link: "Education" }
    ],
  },
  {
    category: "Company",
    links: [
      { id: 1, link: "About Us" },
      { id: 2, link: "Portfolio" },
      { id: 3, link: "Blog" },
      { id: 4, link: "Careers" },
      { id: 5, link: "Pricing" },
      { id: 6, link: "Contact Us" },
      { id: 7, link: "Events" }
    ],
  },
];

export default footerLinks;