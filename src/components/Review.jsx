import Reviewclient from "./Reviewclient";

function Review() {
  return (
    <div className="w-full bg-black  py-10">
      <h1 className="xl:px-20 px-5 font-Neue xl:text text-4xl border-b-[1px] border-zinc-400 pb-8">
        Client&apos;s reviews
      </h1>
      <div className="review-section">
        <Reviewclient />
        <Reviewclient />
        <Reviewclient />
        <Reviewclient />
        <Reviewclient />
        <Reviewclient />
        <Reviewclient />
      </div>
    </div>
  );
}

export default Review;
