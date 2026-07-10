import Navbar from "./components/Navbar";
import About from "./components/About";
import MainOffice from "./components/MainOffice";
import CebuOffice from "./components/CebuOffice";
import OfficeLocation from "./components/OfficeLocation";
import Services from "./components/Services";
import FeaturedPrograms from "./components/FeaturedPrograms";
import Foundation from "./components/Foundation";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import UserReviews from "./components/UserReviews";
import Partners from "./components/Partners";
import Payment from "./components/Payment";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import SectionDivider from "./components/SectionDivider";

export default function App() {
  return (
    <div className="bg-zinc-950 min-h-screen">
      <Navbar />
      <About />
      <SectionDivider />
      <MainOffice />
      <SectionDivider />
      <CebuOffice />
      <SectionDivider />
      <OfficeLocation />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <FeaturedPrograms />
      <SectionDivider />
      <Foundation />
      <SectionDivider />
      <Team />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <UserReviews />
      <SectionDivider />
      <Partners />
      <SectionDivider />
      <Payment />
      <SectionDivider />
      <Contact />
      <SectionDivider />
      <Footer />
      <BackToTop />
    </div>
  );
}
