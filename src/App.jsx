import LocomotiveScroll from "locomotive-scroll";

import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Services from "./Services/Services";
import OurWork from "./work/Work";
import About from "./AboutUs/AboutUs";
import Insight from "./Insight/Insight";
import Contact from "./ContactUs/ContactUs";
import ScrollToTop from "./ScrollToTop";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";

// ******installing locomotive scroll from npm provide us ability to change scroll speed of each component differently*****

function App() {
  const location = useLocation();
  ScrollToTop(); //this switches every page from the top
  const locomotiveScroll = new LocomotiveScroll();
  // ***using this here will smoothen the scroll of entire application

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3500);
    };

    fakeDataFetch();
  }, []);

  // className="w-full text-white bg-zinc-900" use for main div for all components
  return isLoading ? (
    <Loader />
  ) : (
    <div className=" pt-[50px]">
      <Routes location={location} key={location.pathname}>
        <Route index element={<Homepage />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Work" element={<OurWork />} />
        <Route path="/About" element={<About />} />
        <Route path="/Insights" element={<Insight />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
