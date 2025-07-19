import Section from "../components/Section";
import Heading from "../components/Heading";
import { projects } from "../constants";
import Tagline from "../components/Tagline";
import { check2, github, grid, link, loading1 } from "../assets";
import { Gradient } from "../components/design/Gradient";

const Projects = () => {
  const techColors = [
    {
      MongoDB: "#55AD47",
      React: "#1082A7",
      NodeJS: "#72A864",
      "Firebase Google Auth": "#F58613",
      Cloudinary: "#3A48CF",
      "Tailwind CSS": "#1D2434",
      TypeScript: "#377CC8",
      Nodemailer: "#29B777",
      Paypal: "#082D72",
      Swiper: "#6838F6",
      RTK: "#7B51BE",
      "Chakra-UI": "#59CAC7",
      AOS: "#0F2945",
      Supabase: "#3ECF8E",
      "Framer-Motion": "#B936C3",
      MUI: "#0883FF",
      NEXTJS: "#080808",
      CSS: "#2D53E5",
      "Vanilla JS": "#D7BC3B",
      Express: "#0D0D0D",
      "Formik Yup": "#08A5F3",
      HTML: "#E5532D",
      ZOD: "#2B7BB9",
      Recharts: "#FF6A00",
      PHP: "#797db5",
      Zustand: "#F0B90B",
      SWR: "#F7B2A0",
    },
  ];
  return (
    <Section id="projects">
      <div className="container">
        <Heading
          title="Projects "
          text="These are the projects I've created for Front-End and Full-Stack Development."
        />

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {projects.map((item) => {
            const status = item.status === "done" ? "Done" : "In progress";

            return (
              <div
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                  item.colorful ? "bg-conic-gradient" : "bg-n-6"
                }`}
                key={item.id}
              >
                <div className="relative p-4 md:p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                  <div className="absolute top-0 left-0 max-w-full">
                    <img
                      className="w-full"
                      src={grid}
                      width={550}
                      height={550}
                      alt="Grid"
                    />
                  </div>
                  <div className="relative z-1">
                    <div className="flex flex-col md:flex-row items-center gap-3  w-full  justify-between mb-[4.5rem] md:mb-20">
                      <Tagline>{item.date}</Tagline>

                      <div className="flex items-center px-4 md:px-2 py-1 bg-n-1  rounded text-n-8 gap-2">
                        <img
                          src={item.status === "done" ? check2 : loading1}
                          width={16}
                          height={16}
                          alt={status}
                        />
                        <div className="w-full font-grotesk font-light text-sm md:text-[.6rem] lg:text-sm tracking-tagline uppercase">
                          {status}
                        </div>
                      </div>
                    </div>

                    <div className="mb-6 -my-10 -mx-15">
                      <img
                        className="w-full"
                        src={item.imageUrl}
                        width={628}
                        height={426}
                        alt={item.title}
                      />
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg lg:text-3xl">{item.title}</h4>
                      <div className="flex items-center gap-2 ">
                        <a href={item.githubLink} target="_blank">
                          <img
                            src={github}
                            alt="github"
                            className="w-[20px] lg:w-[25px] object-cover"
                            loading="lazy"
                          />
                        </a>
                        <a href={item.websiteLink} target="_blank">
                          <img
                            src={link}
                            alt="link"
                            loading="lazy"
                            className="w-[20px] lg:w-[25px] object-cover"
                          />
                        </a>
                      </div>
                    </div>
                    <ul className="flex flex-wrap gap-x-2 gap-y-3 mb-4 lg:gap-3 lg:mb-6">
                      {item.technologies.map((tech, index) => (
                        <li
                          key={index}
                          style={{
                            backgroundColor: techColors[0][tech],
                            borderRadius: "0.25rem",
                          }}
                          className="border border-n-1/10 px-1 text-[.60rem] lg:text-sm lg:p-1 "
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <p className="body-2 text-n-4">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Projects;
