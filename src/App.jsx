import About from "./components/About";
import Cards from "./components/Cards";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import ReadyToStart from "./components/ReadyToStart";
import Review from "./components/Review";

import LocomotiveScroll from "locomotive-scroll";
import NewNavbar from "./components/Newcomponents/NewNavbar";

// ******installing locomotive scroll from npm provide us ability to change scroll speed of each component differently*****

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  // ***using this here will smoothen the scroll of entire application

  return (
    <div className="w-full text-white bg-zinc-900">
      {/* <Navbar />
       */}
      <NewNavbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Review />
      <Cards />
      <ReadyToStart />
      <Footer />
    </div>
  );
}

export default App;
