import PropTypes from "prop-types";
function HolisticProcess({ handleOpenProcess, procesArray }) {
  return (
    <div className="elements border-b-2 border-zinc-600 py-10">
      <div className="flex items-center font-semibold text-xl md:text-2xl justify-between px-10">
        <h1>01.Phase</h1>
        <button className="underline">Read</button>
      </div>
      <div className="process-desc flex md:text-xl flex-col gap-5 md:gap-7 p-10">
        <h1>{{}}</h1>
        <img
          className="rounded-xl w-[130px]"
          src="https://ochi.design/wp-content/uploads/2022/05/1.Discovery-194x194.png"
          alt="process image"
        />
        <p>
          We define your goals, get to know your audience, and understand the
          context. Through a process of exploration, investigation, and
          research, we seek the insights that inform our future decisions.
        </p>
      </div>
    </div>
  );
}

// prop validation
HolisticProcess.propTypes = {
  procesArray: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.string,
      details: PropTypes.string,
    })
  ),
};

export default HolisticProcess;
