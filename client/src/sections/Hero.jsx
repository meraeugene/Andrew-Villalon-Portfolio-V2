import { curve, heroBackground, fortify } from "../assets";
import Button from "../components/Button";
import Section from "../components/Section";
import {
  BackgroundCircles,
  BottomLine,
  Gradient,
} from "../components/design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "../components/Generating";
import Notification from "../components/Notification";
import LanguageTools from "../components/LanguageTools";
import { scroller } from "react-scroll";

const Hero = () => {
  const parallaxRef = useRef(null);

  const handleClick = () => {
    // Smoothly scroll to the #contact section
    scroller.scrollTo("contact", {
      spy: true,
      smooth: true,
      offset: -30,
      duration: 200,
    });
  };

  return (
    <Section
      className="pt-[8.5rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1  md:mb-6">Andrew R. Villalon</h1>
          <h1 className="text-3xl md:text-5xl mb-10 md:mb-16 inline-block relative lg:text-6xl">
            Full Stack Web Developer{" "}
            <img
              src={curve}
              className="absolute top-full left-0 w-full "
              width={624}
              height={28}
              alt="Curve"
            />
          </h1>
          <p className="body-1 max-w-3xl mx-auto  mb-6 md:mb-10  text-n-2 ">
            Explore my professional front-end web developer portfolio,
            showcasing my expertise in Mongoose, Express, React, Node and
            TypeScript. With a focus on visually stunning and user-friendly
            websites, I strive to deliver seamless online experiences that
            impress both users and clients.
          </p>
          <Button white onClick={handleClick}>
            Hire Me
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[42/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[750/435] lg:aspect-[1024/440]">
                <img
                  src={fortify}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[0%]"
                  width={1024}
                  height={480}
                  alt="project"
                />

                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Andrew R. Villalon"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>

        <LanguageTools className=" relative z-10 mt-20 " />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
