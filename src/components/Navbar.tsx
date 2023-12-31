import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  return (
    <header className="flex items-center relative justify-between px-5 py-4 w-full bg-light-bg-dark dark:bg-dark-bg text-black dark:text-white">
      <div>
        <h1 className="text-2xl font-bold hover:dark:text-gray-400 hover:text-gray-600 transition-all">
          <Link to="/">
            stajdefteri<span className="text-sm">.me</span>
          </Link>
        </h1>
      </div>
      <div>
        <DarkModeToggle />
      </div>
    </header>
  );
};

export default Navbar;
