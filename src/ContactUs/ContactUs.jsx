import { easeInOut, motion } from "framer-motion";
import Navigation from "../components/navigation bar/Navigation";
import Form from "./Form";

function ContactUs() {
  return (
    <div className="bg-black">
      <div>
        <Navigation />
      </div>
      <div className="Contact-landing py-20 px-5 md:px-10 font-Founder flex flex-col gap-1 items-start justify-center">
        <div className="flex items-center justify-center gap-5">
          <motion.img
            initial={{ width: 0 }}
            animate={{ width: "150px" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="h-[120px]  md:h-[110px] rounded-xl origin-left"
            src="https://ochi.design/wp-content/uploads/2022/05/Asset-41-20-300x203.jpg"
            alt="landing image"
          />
          <h1 className="text-8xl uppercase md:text-[180px] font-bold leading-none ">
            Let&apos;s start
          </h1>
        </div>
        <h1 className="text-8xl uppercase md:text-[180px] font-bold leading-none ">
          A project together
        </h1>
      </div>
      <div className="form font-Neue py-20 px-10 flex flex-col gap-20">
        <h2 className="text-xl">Fill the form below:</h2>
        <form className="">
          <Form
            text1="Hi! My name is"
            place1="Enter your name"
            text2="and I work with"
            place2="Company name"
          />
          <Form
            text1="I’m looking for a partner to help me with

"
            place1="Your Goals"
          />
          <Form
            text1="With an idea of having that completed

"
            place1="Date"
          />
          <Form
            text1="I am hoping to stay around a budget range of"
            place1="Budget"
          />
          <Form text1="You can reach me at" place1="Email" />
          <Form
            text1="Optionally, i’m sharing more:"
            place1="Product details"
          />
        </form>
        <div className="submit flex gap-5 font-Neue md:justify-end items-center ">
          <div className="flex gap-3 ">
            <input type="checkbox" id="myCheck" />
            <label htmlFor="myCheck">
              I agree with the{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
            </label>
          </div>
          <button className=" border-2 rounded-full px-3 py-2 hover:bg-white hover:text-black">
            Send Inquiry
          </button>
        </div>
      </div>
      <div className="social-links flex flex-col  text-black font-Founder bg-[#CDEA68] overflow-hidden leading-none rounded-t-2xl py-14">
        <motion.div
          animate={{ x: ["-100%", 0, "100%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: easeInOut }}
          className=" text-center w-full text-8xl font-extrabold"
        >
          Say Hello!
        </motion.div>
        <div className="links w-full border-b-2 border-zinc-800 py-20">
          <motion.div
            animate={{
              y: [0, -30, 0],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-center relative overflow-hidden"
          >
            <a
              href="#"
              className="uppercase text-center text-[110px] font-extrabold tracking-tight md:text-[150px] lg:text-[180px]"
            >
              Instagram
            </a>
          </motion.div>

          <motion.div
            animate={{
              y: [0, -30, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center justify-center text-center md:flex-row md:gap-20"
          >
            <a
              href="#"
              className="uppercase text-center text-[110px] font-extrabold tracking-tight md:text-[150px] lg:text-[180px]"
            >
              Github
            </a>
            <a
              href="#"
              className="uppercase text-center text-[110px] font-extrabold tracking-tight md:text-[150px] lg:text-[180px]"
            >
              Facebook
            </a>
          </motion.div>
          <motion.div
            animate={{
              y: [0, -55, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className=" text-center"
          >
            <a
              href="#"
              className="uppercase text-center text-[110px] font-extrabold tracking-tight md:text-[150px] lg:text-[180px]"
            >
              Linkedin
            </a>
          </motion.div>
        </div>
        <div className="ContactLinks flex flex-col md:flex-row md:items-start md:text-xl md:justify-between px-10 gap-10 font-Neue font-semibold py-10 ">
          <h1>Our Contact:</h1>
          <div className="flex flex-col md:flex-row justify-center gap-20">
            <div className="flex flex-col gap-10">
              <h1>L:</h1>
              <div className="flex flex-col gap-4 justify-end">
                <a href="#">
                  202-1965 W 4th Ave
                  <br /> Vacouver,Canada
                </a>
                <a href="#">
                  202-1965 W 4th Ave
                  <br /> Vacouver,Canada
                </a>
              </div>
            </div>
            <button className="email border-2 w-fit h-fit rounded-full border-black px-4 py-3 hover:text-[#CDEA68] hover:bg-black">
              ak537664@gmail.com
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
