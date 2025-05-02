import { notification1 } from "../assets";

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <img
        src={notification1}
        width={70}
        height={70}
        alt="image"
        className="rounded-xl  object-cover"
      />

      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>

        <div>
          <h4 className="text-md text-white">Full Stack 3+ years</h4>
          <h4 className="text-md text-white">MERN Developer </h4>
        </div>
      </div>
    </div>
  );
};

export default Notification;
