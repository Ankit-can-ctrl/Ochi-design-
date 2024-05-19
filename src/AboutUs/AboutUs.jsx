import BaseEyes from "../components/BaseEyes";
import family from "../img/fam.jpg";
import LandingPage from "../components/LandingPage";
import Navigation from "../components/navigation bar/Navigation";
import Marquee from "../components/Marquee";
import ImageSlider from "./ImageSlider";

function AboutUs() {
  const text = "core of the team";
  const headingArray = ["We are", "ochi design"];
  return (
    <div className="About-us-main-container bg-black text-white">
      <Navigation />
      <div className="landing">
        <LandingPage mainHeading={headingArray} />
      </div>
      <div className="About-us-eyes py-20 px-10 border-t-2 border-zinc-700">
        <div className="flex flex-col font-Neue  gap-10 items-start lg:justify-center lg:grid lg:grid-cols-3">
          <h1 className="font-semibold text-3xl">About Us:</h1>
          <div className="flex flex-col gap-10 text-xl">
            <p>
              In Ukrainian, ochi - means eyes. It's not just a beautiful word,
              but our philosophy. Almost everything that needs to be
              communicated is better shown than explained.
            </p>
            <p>
              We believe a great presentation evokes interest and drives
              business results far better than any saying can. Hence, we founded
              ochi to help you persuade colleagues and clients by creating
              eye-opening presentations.
            </p>
          </div>
          <div className="w-full text-right">
            <button className=" w-fit hover:scale-125 transition-all duration-500 border-2 px-4 py-2 rounded-full hover:text-black hover:bg-white font-semibold">
              Our Work
            </button>
          </div>
        </div>
        <BaseEyes />
      </div>
      <div className="About-us-description border-t-2 flex flex-col gap-20  border-zinc-600 py-20 px-10">
        <div className="flex flex-col gap-28">
          <h1 className="font-Neue text-4xl font-semibold md:text-6xl md:w-[50%] hover:underline ">
            We save businesses from ugly and ineffective presentations.
          </h1>
          <div className="flex flex-col gap-10 font-Neue md:grid md:grid-cols-2">
            <h2 className="text-3xl font-semibold">We are ochi design:</h2>
            <div className="flex flex-col gap-10 text-xl">
              <p className="md:w-[60%]">
                The team of designers, storytellers, and passionate
                collaborators, who work together to create industry-shifting
                presentations that win people's hearts and minds.
              </p>
              <p className="md:w-[60%]">
                And we strive to become one of the most recognizable &
                influential presentation agencies of the time who does that
              </p>
            </div>
          </div>
        </div>
        <img
          className=" rounded-xl h-[300px] md:h-auto "
          src={family}
          alt="about us"
        />
      </div>
      <div className=" slider bg-[#004D43]">
        <Marquee text={text} />
        <div className="slide-cards">
          <ImageSlider />
        </div>
      </div>
      <div className="bg-[#004D43]">
        <div className="text-section rounded-t-3xl py-20 bg-white text-black">
          <div className=" border-zinc-600 border-b-2">
            <h1 className=" px-10 font-Neue font-bold text-5xl pb-10 md:text-8xl md:w-[80%]">
              Two principles we stand behind in every part of our work:
            </h1>
          </div>
          <div className=" px-2 py-20 flex flex-col md:flex-row md:px-10 gap-20 font-Neue text-xl font-semibold">
            <div className="flex flex-col gap-10">
              <img
                className=" rounded-2xl"
                src="https://ochi.design/wp-content/uploads/2022/05/Asset-52@2x-20-1-663x551.jpg"
                alt="image"
              />
              <p className=" xl:px-24 xl:text-justify">
                Whether the presentation needs to convince or educate it always
                has to change audience perception. We seek insights to make
                decks unexpectedly enlightening for our audience.
              </p>
            </div>
            <div className="flex flex-col gap-10">
              <img
                className=" rounded-2xl"
                src="https://ochi.design/wp-content/uploads/2022/05/Asset-51@2x-20-1-663x551.jpg"
                alt="image"
              />
              <p className=" xl:px-24 xl:text-justify">
                The presentation helps to see what's hidden, unseen, or simply
                never known before. We use design to drive their attention,
                focus them to clearly see, and help them feel the message.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="dragable-section bg-white">
        <div className=" bg-black rounded-t-3xl">
          <div className=" border-b-2 border-zinc-600 py-24 font-Neue">
            <h1 className="px-5 md:px-10 text-3xl font-bold md:text-6xl md:w-[70%]">
              We’ve built long-lasting partnerships with the most ambitious
              brands across the globe:
            </h1>
          </div>
          <div className="dragable-cards">cards</div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
