import { useEffect, useState } from "react";
import LogInputForm from "../components/LogInputForm";
import { Log } from "../types";

const Home = () => {
  const [logs, setLogs] = useState<Log[]>([]);

  useEffect(() => {
    const logs = localStorage.getItem("logs");
    if (logs) {
      setLogs(JSON.parse(logs));
    }
  }, []);

  return (
    <div className="flex-grow container mx-auto">
      <LogInputForm />
      <div className="mt-4 text-center">
        <h2 className="text-2xl font-bold">Kayıtlar</h2>
        {logs.length === 0 && (
          <p className="text-gray-500 text-center mt-2">Henüz kayıt yok.</p>
        )}
        </div>
    </div>
  );
};

export default Home;
