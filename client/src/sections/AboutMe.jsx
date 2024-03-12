import { notification1 } from "../assets";
import Heading from "../components/Heading";
import LanguageTools from "../components/LanguageTools";
import Section from "../components/Section";
import { RiAwardFill } from "react-icons/ri";
import { PiStudent } from "react-icons/pi";

const AboutMe = () => {
  return (
    <Section id="about">
      <div className="px-24">
        <Heading title="About Me " />

        <div className="flex justify-center  w-full  gap-12">
          <div className="basis-[30%]  ">
            <img
              src={notification1}
              alt=""
              className=" object-cover rounded-md "
            />
          </div>

          <div className=" flex flex-col gap-8 basis-[70%]">
            <div className="flex gap-8">
              <div className="bg-n-9/40 p-4 flex flex-col items-center justify-center text-center basis-1/2 backdrop-blur border border-n-1/10  rounded-md">
                <RiAwardFill size={25} />
                <h1 className="text-n-2 mt-3 ">Experience</h1>
                <h2 className="text-sm mt-2">
                  2 years+ Full Stack MERN Developer
                </h2>
                <h2 className="text-sm mt-1">Front-End Developer Freelancer</h2>
              </div>
              <div className="bg-n-9/40 p-4 flex flex-col items-center justify-center text-center basis-1/2  backdrop-blur border border-n-1/10  rounded-md">
                <PiStudent size={25} />
                <h1 className="text-n-2 mt-3 ">Education</h1>
                <h2 className="text-sm mt-2">
                  Bachelor of Science in Information Technology
                </h2>
                <h2 className="text-sm mt-1">
                  (USTP) University of Southern Philippines
                </h2>
              </div>
            </div>
            <p className="body-2   text-n-2  ">
              Hello! My name is Andrew R. Villalon, and I have almost 2 years
              experience in FullStack Web Development. My interest in web
              development was sparked in 2022 when I created my first landing
              page website built using HTML and CSS.
            </p>
            <LanguageTools className="hidden relative z-10  mt-2 lg:block" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;
