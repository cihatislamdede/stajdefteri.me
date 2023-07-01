import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="w-full px-4 py-6 sm:px-6 lg:px-8 bg-light-bg-dark dark:bg-dark-bg text-black dark:text-white">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://github.com/cihatislamdede/stajdefteri.me"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center hover:text-gray-400 transition-all"
          >
            <FaGithub className="mr-2" />
            <span className="text-sm">Açık Kaynak</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
