import LocomotiveScroll from "locomotive-scroll";
import Navigation from "./components/navigation bar/Navigation";

// ******installing locomotive scroll from npm provide us ability to change scroll speed of each component differently*****

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  // ***using this here will smoothen the scroll of entire application
  // className="w-full text-white bg-zinc-900" use for main div for all components
  return (
    <div>
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
      <Navigation />

      {/* <ContactUs /> */}
      {/* <NewTest /> */}
    </div>
  );
}

export default App;
