import { useState } from "react";
import ClientDetail from "./ClientDetail";
const clientData = [
  {
    company: "Karman Ventures",
    name: "William Barnes",
    services: ["invester deck", "sales deck"],
    img: "https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png",
    desc: "They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5",
  },
];

function Reviewclient() {
  const [showDetails, setShowDetails] = useState(false);
  function handleDetails() {
    setShowDetails(!showDetails);
  }
  return (
    <>
      {clientData.map((item, index) => (
        <>
          <div className="font-Neue main-container w-full border-b-1 py-4 px-10 flex justify-between items-start">
            <h1 className="border-b-2 w-fit">{item.company}</h1>

            <button className=" underline" onClick={() => handleDetails()}>
              Read More
            </button>
          </div>
          <div className="">
            {showDetails && (
              <ClientDetail showDetails={showDetails} item={item} />
            )}
          </div>
          <div className="border-b-2 border-zinc-500"></div>
        </>
      ))}
    </>
  );
}

export default Reviewclient;
