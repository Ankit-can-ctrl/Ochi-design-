import { useState } from "react";
import NewNavbar from "../components/Newcomponents/NewNavbar";
import HolisticProcess from "./HolisticProcess";
import { motion } from "framer-motion";
import Review from "../components/Review";
import Marquee from "../components/Marquee";
import ReadyToStart from "../components/ReadyToStart";
import Footer from "../components/Footer";

const fadeInAnimationVariant = {
  initial: {
    opacity: 0,
  },
  //we can also use animte of framer motions as a javascript function
  animate: (i) => ({
    opacity: 1,
    transition: {
      duration: 5,
      delay: i * 0.2, //each letter will be delayed this much
    },
  }),
};

function Services() {
  // const ref = useRef< HTMLDivElement >(null); //prettier-ignore
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["0 1", "1.33 1"],
  // });
  const greenCards = [
    {
      subHeading: "Communication",
      description:
        "The relationship with the clients is our top priority. We put extra effort into keeping mutual respect, honesty, and clarity in the conversation. For each client, we develop a project view site in Notion to track milestones and see the thinking behind steps. You always know what and when we do, as you feel confident in the results we bring.",
    },
    {
      subHeading: "Communication",
      description:
        "The relationship with the clients is our top priority. We put extra effort into keeping mutual respect, honesty, and clarity in the conversation. For each client, we develop a project view site in Notion to track milestones and see the thinking behind steps. You always know what and when we do, as you feel confident in the results we bring.",
    },
    {
      subHeading: "Communication",
      description:
        "The relationship with the clients is our top priority. We put extra effort into keeping mutual respect, honesty, and clarity in the conversation. For each client, we develop a project view site in Notion to track milestones and see the thinking behind steps. You always know what and when we do, as you feel confident in the results we bring.",
    },
    {
      subHeading: "Communication",
      description:
        "The relationship with the clients is our top priority. We put extra effort into keeping mutual respect, honesty, and clarity in the conversation. For each client, we develop a project view site in Notion to track milestones and see the thinking behind steps. You always know what and when we do, as you feel confident in the results we bring.",
    },
  ];
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

  const cardsArray = [
    { head: "100+", desc: "Clients from 17 Countries" },
    { head: "100+", desc: "Clients from 17 Countries" },
    { head: "100+", desc: "Clients from 17 Countries" },
    { head: "100+", desc: "Clients from 17 Countries" },
  ];

  const [readOpen, setReadOpen] = useState({});
  function handleReadOpen(index) {
    setReadOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  }

  const [currentImage, setCurrentImage] = useState(null);
  function handleTagHover(index) {
    setCurrentImage(Capabilities[index].image);
    // const imageObject = Capabilities.find((item) => item.tags.includes(tag));
    // if (imageObject) {
    //   setCurrentImage(imageObject.image);
    // }
  }
  function handleOnLeave() {
    setCurrentImage(null);
  }

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
      <div className="w-full bg-[#d5f269] rounded-t-2xl mt-10 pb-10">
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
            <div className="hidden md:block">
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
                  {item.tags.map((tag, tagIndex) => (
                    <div key={tagIndex}>
                      <button
                        onMouseEnter={() => handleTagHover(index)}
                        onMouseLeave={handleOnLeave}
                        className="tag uppercase hover:text-white hover:border-white hover:bg-black w-fit border-2 border-[#96aa4b] px-4 py-2 rounded-full"
                      >
                        {tag}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Review />
      </div>
      <div className="bg-black py-10 border-b-2 overflow-hidden border-zinc-600">
        <motion.div
          animate={{
            scale: [1, 1.2, 1.2, 1, 1],
            // rotate: [0, 0, 360, 360, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{ duration: 9, repeat: Infinity }}
        >
          <img
            className="p-5 rounded-xl"
            src="https://ochi.design/wp-content/uploads/2023/08/Group-61165.png"
            alt="services image"
          />
        </motion.div>
      </div>
      <div className="ochi-numbers bg-black px-4 md:px-10 py-20 flex flex-col gap-14 md:grid md:grid-cols-2 font-Neue ">
        <h1 className=" font-semibold text-xl md:text-4xl lg:text-6xl">
          Ochi in numbers:
        </h1>
        <div className="flex flex-col gap-7 lg:grid lg:grid-cols-2">
          {cardsArray.map((item, index) => (
            <div
              key={index}
              className="numbers-card bg-zinc-800 p-5 min-h-[250px] flex flex-col items-start justify-between rounded-2xl"
            >
              <h1 className=" text-6xl font-semibold">
                {item.head.split("").map((el, i) => (
                  <motion.span
                    variants={fadeInAnimationVariant} //using created animation
                    initial="initial"
                    whileInView="animate" //animate only when in view
                    key={i}
                    custom={i} //passing i(index) to the animate as a function
                    viewport={{ once: true }} //this happens only one time
                  >
                    {el}
                  </motion.span>
                ))}
              </h1>
              <p className=" font-medium">
                {item.desc.split(" ").map((el, i) => (
                  <motion.span
                    variants={fadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    custom={i}
                    key={i}
                    viewport={{ once: true }}
                  >
                    {el} <span> </span>
                  </motion.span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Marquee />
      </div>
      <div className="detail-cards bg-[#004D43] py-10 flex flex-col px-5 gap-10 md:grid md:grid-cols-2">
        <h1 className=" font-semibold md:text-4xl xl:text-6xl">
          What can you expect
        </h1>
        <div className="flex flex-col gap-5 lg:grid lg:grid-cols-2">
          {greenCards.map((item, index) => (
            <div
              key={index}
              className="card min-h-[250px]  bg-[#3b7b72] rounded-xl p-5 flex flex-col items-start gap-28 justify-between"
            >
              <h1 className=" text-6xl font-semibold">
                {index <= 9 ? "0" : ""}
                {index + 1}
              </h1>
              <div className="flex flex-col gap-6">
                <div className="flex w-full justify-between underline">
                  <button
                    className="heading"
                    onClick={() => handleReadOpen(index)}
                  >
                    Communication
                  </button>
                  <button
                    className="read-hide"
                    onClick={() => handleReadOpen(index)}
                  >
                    {readOpen[index] ? "close" : "Read"}
                  </button>
                </div>

                <motion.p
                  initial={{ height: "0" }}
                  animate={
                    readOpen[index] ? { height: "100%" } : { height: "0" }
                  }
                  className="overflow-hidden"
                >
                  The relationship with the clients is our top priority. We put
                  extra effort into keeping mutual respect, honesty, and clarity
                  in the conversation. For each client, we develop a project
                  view site in Notion to track milestones and see the thinking
                  behind steps. You always know what and when we do, as you feel
                  confident in the results we bring.
                </motion.p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" bg-[#004D43] ">
        <ReadyToStart />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Services;
