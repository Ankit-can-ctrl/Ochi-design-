import Navigation from "../components/navigation bar/Navigation";
import HomeLandingPage from "../components/HomeLandingPage";
import Marquee from "../components/Marquee";
import About from "../components/About";
import Eyes from "../components/Eyes";
import Featured from "../components/Featured";
import Review from "../components/Review";
import Cards from "../components/Cards";
import ReadyToStart from "../components/ReadyToStart";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <div className="Home-main-container text-white">
      <div className=" bg-black">
        <Navigation />
      </div>
      <HomeLandingPage />
      <Marquee text={"we are ochi"} />
      <About />
      <div className="hidden md:block">
        <Eyes />
      </div>
      <Featured />
      <Review />
      <Cards />
      <div className=" bg-black">
        <ReadyToStart />
      </div>
      <div className=" bg-[#D5F269]">
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
