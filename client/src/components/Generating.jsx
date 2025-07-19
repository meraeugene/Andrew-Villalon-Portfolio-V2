import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center justify-center h-[3rem] md:h-[3.5rem] px-6 bg-gray-600 rounded-[1.7rem] ${
        className || ""
      } text-xs md:text-base`}
    >
      {/* <img className="w-5 h-5 mr-4" src={loading} alt="Loading" /> */}
      With over 20+ Projects for clients and personal use.
    </div>
  );
};

export default Generating;
