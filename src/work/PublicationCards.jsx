import { motion } from "framer-motion";
import image1 from "../img/publicationCards/1.jpg";
import image2 from "../img/publicationCards/2.jpg";
import image3 from "../img/publicationCards/3.jpg";
import image4 from "../img/publicationCards/4.jpg";
const publicationData = [
  {
    name: "OfficeVibe PPT Template",
    image: image1,
  },
  {
    name: "OfficeVibe PPT Template",
    image: image2,
  },
  {
    name: "OfficeVibe PPT Template",
    image: image3,
  },
  {
    name: "OfficeVibe PPT Template",
    image: image4,
  },
];
function PublicationCards() {
  return (
    <div>
      <div className=" py-10 px-5 flex flex-col gap-10 ">
        <h1 className=" font-Neue px-5 font-semibold text-2xl ">
          Latest Publications:
        </h1>
        <div className="flex cursor-pointer flex-col md:flex-row gap-5 items-center justify-center">
          {" "}
          {publicationData.map((item, index) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              key={index}
              className="cards flex flex-col gap-10 px-5 "
            >
              <div className="card overflow-hidden">
                <img className="rounded-2xl " src={item.image} alt="cards" />
              </div>
              <div className="name px-2 flex items-center justify-start gap-5">
                <span>
                  <svg
                    color="white"
                    stroke="currentColor"
                    fill="currentColor"
                    viewBox="0 0 8 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path>
                  </svg>
                </span>
                <h1 className=" font-Neue text-md font-semibold">
                  {item.name}
                </h1>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PublicationCards;
