import PropTypes from "prop-types";
import { useState } from "react";

function HolisticProcess(props) {
  const { processArray = [] } = props;
  const [isOpenprocess, setIsOpenProcess] = useState(false);
  function handleOpenProcess() {
    setIsOpenProcess(!isOpenprocess);
  }

  return (
    <>
      {processArray.map((item) => (
        <div
          key={item.head}
          className="elements border-b-2 border-zinc-600 py-10"
        >
          <div className="flex items-center font-semibold text-xl md:text-2xl justify-between px-10">
            <h1>{item.head}</h1>
            <button className="underline" onClick={() => handleOpenProcess()}>
              Read
            </button>
          </div>
          {isOpenprocess && (
            <div className="process-desc flex md:text-xl flex-col gap-5 md:gap-7 p-10">
              <div key={item.head} className="flex flex-col gap-5">
                <h1>{item.title}</h1>
                <img
                  className="rounded-xl w-[130px]"
                  src={item.image}
                  alt="process image"
                />
                <p>{item.details}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
}

// prop validation
HolisticProcess.propTypes = {
  processArray: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.string,
      details: PropTypes.string,
    })
  ),
};

export default HolisticProcess;
