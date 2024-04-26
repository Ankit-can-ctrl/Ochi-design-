import { useState } from "react";

function Reviewclient({ company, services }) {
  const [showDetails, setShowDetails] = useState(false);
  function handleDetails() {
    setShowDetails(!showDetails);
  }
  return (
    <>
      <div className="font-Neue main-container w-full border-b-1 py-4 px-10 grid grid-cols-4 items-start">
        <h1 className="border-b-2 w-fit">Company</h1>
        <div className="services flex flex-col items-start gap-20">
          <h1>Services:</h1>
          {showDetails && (
            <div>
              <button className="rounded-full border-2 px-4">
                Investor Deck
              </button>
            </div>
          )}
        </div>
        <div className="client-desc flex flex-col items-start justify-between gap-5">
          <h1 className="capitalize">name</h1>
          {showDetails && (
            <>
              <img
                className=" h-28 rounded-lg"
                src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png"
                alt="client image"
              />
              <p>
                They were transparent about the time and the stages of the
                project. The end product is high quality, and I feel confident
                about how they were handholding the client through the process.
                I feel like I can introduce them to someone who needs to put a
                sales deck together from scratch, and they would be able to
                handhold the client experience from 0 to 100 very effectively
                from story to design. 5/5
              </p>
            </>
          )}
        </div>
        <button onClick={handleDetails}>Read More</button>
      </div>
      <div className="border-b-2 border-zinc-500"></div>
    </>
  );
}

export default Reviewclient;
