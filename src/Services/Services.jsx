import NewNavbar from "../components/Newcomponents/NewNavbar";
import HolisticProcess from "./HolisticProcess";

function Services() {
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
    </div>
  );
}

export default Services;
