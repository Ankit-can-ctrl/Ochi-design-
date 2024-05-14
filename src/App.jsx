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
import NewNavbar from "./components/Newcomponents/NewNavbar";
import Services from "./Services/Services";
import Work from "./work/Work";

// ******installing locomotive scroll from npm provide us ability to change scroll speed of each component differently*****

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  // ***using this here will smoothen the scroll of entire application
  // className="w-full text-white bg-zinc-900" use for main div for all components
  return (
    <div>
      {/* <NewNavbar />
      <LandingPage />

      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Review />
      <Cards />
      <ReadyToStart />
      <Footer /> */}
      {/* <Services /> */}
      <Work />
    </div>
  );
}

export default App;
