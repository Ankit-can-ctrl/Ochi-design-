import LandingLinks from "./LandingLinks";
import LandingPage from "./LandingPage";

function HomeLandingPage() {
  const mainHeading = ["We Create", "Eye Opening", "Presentations"];
  return (
    <div className=" bg-black h-screen">
      <LandingPage mainHeading={mainHeading} />
      <LandingLinks />
    </div>
  );
}

export default HomeLandingPage;
