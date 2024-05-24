import About from "./components/About";
import Cards from "./components/Cards";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
// import Navbar from "./components/Navbar";
import ReadyToStart from "./components/ReadyToStart";
import Review from "./components/Review";

import LocomotiveScroll from "locomotive-scroll";

import Services from "./Services/Services";
import Work from "./work/Work";
import AboutUs from "./AboutUs/AboutUs";
import Navigation from "./components/navigation bar/Navigation";
import LandingLinks from "./components/LandingLinks";
import HomeLandingPage from "./components/HomeLandingPage";
import ImageSlider from "./AboutUs/ImageSlider";
import DragCards from "./AboutUs/DragCards";
import CursorMask from "./components/CursorMask";
import Test from "./Test";
import Insight from "./Insight/Insight";
import NewTest from "./NewTest";

// ******installing locomotive scroll from npm provide us ability to change scroll speed of each component differently*****

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  // ***using this here will smoothen the scroll of entire application
  // className="w-full text-white bg-zinc-900" use for main div for all components
  return (
    <div className="text-white">
      {/* <Navigation />
      <HomeLandingPage />
      <Marquee text={"we are ochi"} />
      <About />
      <Eyes />
      <Featured />
      <Review />
      <Cards />
      <ReadyToStart />
      <Footer /> */}
      <Insight />
    </div>
  );
}

export default App;
