import Backing from "../Backing/Backing";
import DevelopmentServices from "../DevelopmentServices/DevelopmentServices";
import Hero from "../hero/Hero";
import ProductsDeveloped from "../ProductsDeveloped/ProductsDeveloped";
import Testimonials from "../PartnersStories/Testimonials";
import ServicesTabs from "../Engagement models/ServicesTabs";
import Expertise from "../Expertise/Expertise";
import CaseStudy from "../CaseStudy/CaseStudy";
import OwnTeam from "../OwnTeam/OwnTeam";

function Home() {
  return (
    <>
 
      <Hero />

      <ProductsDeveloped />
      <DevelopmentServices />
      <Backing />
      <Testimonials />
      <ServicesTabs />
      <Expertise />
      <CaseStudy />
      <OwnTeam />
      

    </>
  );
}

export default Home;
