import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  return (
    <header className="flex dark:bg-slate-900 items-center relative justify-between bg-white px-5 py-6 w-full">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          <a href="/">stajdefterim</a>
        </h1>
      </div>
      <div className="flex gap-3 items-center">
        <DarkModeToggle />
      </div>
    </header>
  );
};

export default Header;
