import LogInputForm from "../components/LogInputForm";
import { useLogStore } from "../stores/logStore";
import LogCard from "../components/LogCard";

const Home = () => {
  const logs = useLogStore((state) => state.logs);

  return (
    <div className="flex-grow container mx-auto">
      <LogInputForm />
      <div className="mt-4">
        <h2 className="text-2xl font-bold text-center justify-center">
          Kayıtlar
        </h2>
        {logs.length === 0 ? (
          <p className="text-gray-500 text-center mt-2">Henüz kayıt yok.</p>
        ) : (
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-6 mt-6 mx-2">
            {logs
              .sort(
                (a, b) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime()
              )
              .map((log) => (
                <LogCard key={log.id} log={log} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
