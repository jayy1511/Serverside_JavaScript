import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Button2 = ({ title, link, state, scrollTo, onClick, small }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link && !scrollTo) {
      if (state) {
        navigate(`/${link}`, { state });
      } else {
        navigate(`/${link}`);
      }
    }
    if (onClick) {
      onClick();
    }
  };

  const baseClasses = "text-sm py-2 px-4"; // <<< made it smaller here

  return scrollTo ? (
    <Link
      to={scrollTo}
      spy={true}
      smooth={true}
      duration={500}
      className={`relative inline-flex items-center justify-start ${baseClasses} overflow-hidden font-bold rounded-full group cursor-pointer`}
    >
      <span className="w-24 h-24 rotate-45 translate-x-10 -translate-y-2 absolute left-0 top-0 bg-white opacity-[5%]"></span> {/* made span smaller too */}
      <span className="absolute top-0 left-0 w-32 h-32 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-40 -translate-y-20 bg-[#B0B0B0] opacity-100 group-hover:-translate-x-8"></span> {/* made span smaller */}
      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out">
        {title}
      </span>
      <span className="absolute inset-0 border-2 border-white rounded-full"></span>
    </Link>
  ) : (
    <button
      onClick={handleClick}
      className={`relative inline-flex items-center justify-start ${baseClasses} overflow-hidden font-bold rounded-full group`}
    >
      <span className="w-24 h-24 rotate-45 translate-x-10 -translate-y-2 absolute left-0 top-0 bg-white opacity-[5%]"></span> {/* made span smaller */}
      <span className="absolute top-0 left-0 w-32 h-32 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-40 -translate-y-20 bg-[#B0B0B0] opacity-100 group-hover:-translate-x-8"></span> {/* made span smaller */}
      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out">
        {title}
      </span>
      <span className="absolute inset-0 border-2 border-white rounded-full"></span>
    </button>
  );
};

export default Button2;
