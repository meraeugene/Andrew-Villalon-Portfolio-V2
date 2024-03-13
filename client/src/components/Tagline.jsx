import brackets from "../assets/svg/Brackets";

const TagLine = ({ className, children }) => {
  return (
    <div
      className={`font-grotesk font-light text-[.8rem] tracking-tagline uppercase flex items-center ${
        className || ""
      }`}
    >
      {brackets("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {brackets("right")}
    </div>
  );
};

export default TagLine;
