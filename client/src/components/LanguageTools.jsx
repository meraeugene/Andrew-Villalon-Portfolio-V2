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
} from "../assets";

const LanguageTools = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Languages, Frameworks , and Tools
      </h5>
      <ul className="flex items-center justify-center gap-6 px-8">
        <li>
          <img src={mongodbSvg} width={150} height={150} alt="icon" />
        </li>
        <li>
          <img src={expressBig} width={100} height={100} alt="icon" />
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
        <li>
          <img src={saas} width={50} height={50} alt="icon" />
        </li>
        <li>
          <img src={firebase} width={50} height={50} alt="icon" />
        </li>
        <li>
          <img src={figmaIcon} width={50} height={50} alt="icon" />
        </li>
        <li>
          <img src={git} width={50} height={50} alt="icon" />
        </li>
      </ul>
    </div>
  );
};

export default LanguageTools;
