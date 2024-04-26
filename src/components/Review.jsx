import Reviewclient from "./Reviewclient";

function Review() {
  return (
    <div className="w-full bg-black  py-10">
      <h1 className="px-20 font-Neue text-7xl border-b-[1px] border-zinc-400 pb-8">
        Client&apos;s reviews
      </h1>
      <div className="review-section">
        <Reviewclient />
      </div>
    </div>
  );
}

export default Review;
