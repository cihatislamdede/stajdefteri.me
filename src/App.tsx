import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-light-bg-dark dark:bg-dark-bg text-black dark:text-white">
        <section className="container mx-auto px-2 py-4">
          <form className="flex flex-col w-1/2 p-4 rounded-md">
            <div className="flex flex-row items-center justify-between">
              <input
                className="w-1/4 p-2 my-2 border border-gray-300 rounded-md"
                type="text"
                placeholder="Title"
              />
              <input
                className="w-1/4 p-2 my-2 border border-gray-300 rounded-md text-black"
                type="date"
                placeholder="Date"
              />
            </div>
            <textarea
              id="note"
              rows={5}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="You can write about what you did/achieved today..."
            ></textarea>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
