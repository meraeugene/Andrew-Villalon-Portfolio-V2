import { services } from "../constants";
import Heading from "../components/Heading";
import Section from "../components/Section";
// import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "../components/design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Services = () => {
  return (
    <Section id="services">
      <div className="container relative z-2">
        <Heading className="md:max-w-md lg:max-w-2xl" title="Services" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6  mb-10 lg:flex lg:flex-wrap lg:gap-10">
          {services.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col  min-h-[20rem]  md:min-h-[22rem] p-7 md:p-8 pointer-events-none">
                <h5 className="text-lg mb-5 md:text-2xl">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    alt={item.title}
                    className={` rounded-md p-2`}
                    style={{
                      backgroundColor: item.bg,
                    }}
                  />
                  {/* <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow /> */}
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-10 transition-opacity lg:hover:opacity-10 lg:opacity-0">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;
