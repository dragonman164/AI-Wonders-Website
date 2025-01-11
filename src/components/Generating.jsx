import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      {/* <img className="w-5 h-5 mr-4" src={loading} alt="Loading" /> */}
      <p className="text-sm md:pd-1 md:pb-1">AI is evolving. Keep yourself updated in the fast-paced market.</p>
    </div>
  );
};

export default Generating;
