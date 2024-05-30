import LocomotiveScroll from "locomotive-scroll";

import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Services from "./Services/Services";
import OurWork from "./work/Work";
import About from "./AboutUs/AboutUs";
import Insight from "./Insight/Insight";
import Contact from "./ContactUs/ContactUs";
// ******installing locomotive scroll from npm provide us ability to change scroll speed of each component differently*****

function App() {
  const location = useLocation();

  const locomotiveScroll = new LocomotiveScroll();
  // ***using this here will smoothen the scroll of entire application
  // className="w-full text-white bg-zinc-900" use for main div for all components
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Homepage />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Work" element={<OurWork />} />
        <Route path="/About" element={<About />} />
        <Route path="/Insights" element={<Insight />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
