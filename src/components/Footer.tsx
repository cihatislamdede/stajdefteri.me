const Footer = () => {
  return (
    <footer>
      <div className="mx-auto w-full px-4 py-8 sm:px-6 lg:px-8 bg-light-bg-dark dark:bg-dark-bg text-black dark:text-white">
        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="flex justify-center sm:justify-start">stajdefterim</p>
          <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400 lg:mt-0 lg:text-right">
            Copyright &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
