import { useState } from "react";
import NewNavbar from "../components/Newcomponents/NewNavbar";
import HolisticProcess from "./HolisticProcess";
import { motion } from "framer-motion";

const Capabilities = [
  {
    title: "Raise funds",
    tags: ["investors deck", "startup pitch"],
    image:
      "https://ochi.design/wp-content/uploads/2022/05/Asset-38-20-663x450.jpg",
  },
  {
    title: "Raise funds",
    tags: ["investors deck", "startup pitch"],
    image:
      "https://ochi.design/wp-content/uploads/2022/05/Asset-36-20-663x448.jpg",
  },
  {
    title: "Raise funds",
    tags: ["investors deck", "startup pitch"],
    image:
      "https://ochi.design/wp-content/uploads/2022/05/Asset-39-20-663x448.jpg",
  },
  {
    title: "Raise funds",
    tags: ["investors deck", "startup pitch"],
    image:
      "https://ochi.design/wp-content/uploads/2022/05/Asset-37-20-663x448.jpg",
  },
];

function Services() {
  const [currentImage, setCurrentImage] = useState(null);
  function handleTagHover(tag) {
    const imageObject = Capabilities.find((item) => item.tags.includes(tag));
    if (imageObject) {
      setCurrentImage(imageObject.image);
    }
  }

  const processArray = [
    {
      head: "01.Phase",
      title: "Discovery",
      image:
        "https://ochi.design/wp-content/uploads/2022/05/1.Discovery-194x194.png",
      details:
        "We define your goals, get to know your audience, and understand the context. Through a process of exploration, investigation, and research, we seek the insights that inform our future decisions.",
    },
  ];

  return (
    <div className="text-white font-Neue">
      <NewNavbar />
      <div className="landing-page w-full text-white font">
        <div className=" md:text-6xl xl:text-8xl heading uppercase px-10 py-20 xl:py-28 font-Founder text-5xl font-semibold tracking-tighter border-b-2 border-zinc-600">
          Services
        </div>
        <p className="px-10 py-20 xl:py-28 font-Neue text-2xl md:text-4xl xl:text-6xl border-b-2 border-zinc-600">
          We create <span className="underline"> eye-catching</span> and
          <span className="underline"> eye-opening</span> presentations that
          educate, inspire and influence action.
        </p>
        <div className="services-details font-Neue flex flex-col md:flex-row px-10 gap-10 py-20">
          <div className=" font-semibold text-xl md:w-[70%]">
            We do this by following simple approach:
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h1 className="underline ">Goal defines it all</h1>
              <p>
                What do you want to achieve? Understanding the purpose of your
                presentation allows us to tailor it to ensure it hits the mark
                and drives results.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="underline ">Audience is the hero</h1>
              <p>
                Who is it for? What do they want? Why does it matter to them? We
                need to know your audience well enough to deliver a personalized
                presentation that they truly care about.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="underline ">Context makes a difference</h1>
            <p>
              When do you present? Online or live? At a sales meeting, at a
              conference, or just sending a cold email? We knit the context
              together to decide the style of the presentation.
            </p>
          </div>
        </div>
      </div>
      <div className="holistic-process">
        <div className=" border-b-2 border-zinc-600 py-10">
          <h1 className="text-4xl font-semibold px-10 md:text-6xl">
            Holistic process:
          </h1>
        </div>
        <HolisticProcess processArray={processArray} />
        <HolisticProcess processArray={processArray} />
        <HolisticProcess processArray={processArray} />
        <HolisticProcess processArray={processArray} />
        <HolisticProcess processArray={processArray} />
      </div>
      <div className="w-full bg-[#d5f269] rounded-t-2xl my-10">
        <div className="descripton border-b-2 border-[#9cad5d] text-black font-Neue">
          <p className="px-10 py-20 font-medium text-2xl md:text-4xl xl:text-6xl">
            Lets be honest. There are really no excuses to have a bad
            presentation anymore. No one has time for poorly communicated ideas.
            Focus on what you do best — growing your business, while we do our
            best at making your presentations awesome.
          </p>
        </div>
        <div className="capabilities px-10 py-10 text-black font-Neue flex flex-col md:grid md:grid-cols-2 gap-10">
          <div className="md:flex md:flex-col justify-between items-start">
            <h1 className="text-2xl font-semibold md:text-4xl md:font-medium xl:text-6xl">
              Our Capabilities:
            </h1>
            <div>
              {currentImage && (
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, easings: [0.65, 0, 0.35, 1] }}
                  exit={{ opacity: 0 }}
                  className=" md:block h-[300px] rounded-2xl"
                  src={currentImage}
                  alt="tags-image"
                />
              )}
            </div>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-2 gap-10 md:pt-20">
            {Capabilities.map((item, index) => (
              <div key={index} className="px-5 flex flex-col gap-5">
                <div className="head flex items-center gap-3">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    height=".7em"
                    width=".7rem"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="8" cy="8" r="8"></circle>
                  </svg>
                  <h1 className="uppercase">{item.title} :</h1>
                </div>
                <div className="flex flex-col gap-5">
                  {item.tags.map((item, index) => (
                    <div key={index}>
                      <button
                        onMouseEnter={() => handleTagHover(item)}
                        onMouseLeave={() => setCurrentImage()}
                        className="tag uppercase hover:text-white hover:border-white hover:bg-black w-fit border-2 border-[#96aa4b] px-4 py-2 rounded-full"
                      >
                        {item}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
