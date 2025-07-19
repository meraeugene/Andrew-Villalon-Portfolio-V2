import {
  mongodbSvg,
  expressBig,
  reactNoBg,
  nodejsNoBg,
  tailwindcss,
  typescript,
  rtk,
  saas,
  firebase,
  figmaIcon,
  git,
  phplogo,
  nextjs,
  supabase,
} from "../assets";
const LanguageTools = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Languages, Frameworks , and Tools
      </h5>
      <ul className="grid grid-cols-4 md:grid-cols-8 place-items-center gap-x-4 gap-y-8 lg:grid-cols-12  lg:gap-x-6 ">
        <li>
          <span>NEXTJS</span>
        </li>
        <li>
          <img
            src={supabase}
            width={150}
            height={150}
            alt="icon"
            className="rounded-md"
          />
        </li>
        <li>
          <img src={mongodbSvg} width={150} height={150} alt="icon" />
        </li>
        <li>
          <img
            src={expressBig}
            className="rounded-md"
            width={100}
            height={100}
            alt="icon"
          />
        </li>

        <li>
          <img src={reactNoBg} width={50} height={50} alt="icon" />
        </li>
        <li>
          <img src={nodejsNoBg} width={80} height={80} alt="icon" />
        </li>
        <li>
          <img src={tailwindcss} width={50} height={50} alt="icon" />
        </li>
        <li>
          <img src={typescript} width={50} height={50} alt="icon" />
        </li>
        <li>
          <img src={rtk} width={50} height={50} alt="icon" />
        </li>
        {/* <li>
          <img src={saas} width={50} height={50} alt="icon" />
        </li> */}
        <li>
          <img src={firebase} width={50} height={50} alt="icon" />
        </li>

        <li>
          <img src={git} width={50} height={50} alt="icon" />
        </li>

        <li>
          <img src={phplogo} width={50} height={50} alt="icon" />
        </li>
      </ul>
    </div>
  );
};

export default LanguageTools;
