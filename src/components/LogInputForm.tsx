import { useState } from "react";
import { Log } from "../types";
import { toast } from "react-toastify";

const LogInputForm = () => {
  const [log, setLog] = useState<Log>({
    id: 0,
    section: "",
    title: "",
    date: "",
    content: "",
  });

  const saveLog = () => {
    if (log.section && log.title && log.date && log.content) {
      const logs = localStorage.getItem("logs");
      if (logs) {
        const parsedLogs = JSON.parse(logs);
        // last id + 1
        log.id = parsedLogs[parsedLogs.length - 1].id + 1;
        parsedLogs.push(log);
        localStorage.setItem("logs", JSON.stringify(parsedLogs));
      } else {
        localStorage.setItem("logs", JSON.stringify([log]));
      }
      window.location.reload();
      toast.success("Kayıt başarıyla eklendi.");
    } else {
      toast.info("Lütfen tüm alanları doldurun.");
    }
  };

  return (
    <div className="mx-2 md:w-fit md:mx-auto p-6 md:my-4 md:px-12 rounded-2xl shadow-2xl text-dark-bg dark:text-white/80">
      <p className="text-2xl font-bold ml-1">Kayıt Ekle</p>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 mt-1">
        <div>
          <label className="md:text-sm text-xs font-semibold ml-1">Bölüm</label>
          <input
            className="w-full bg-gray-100 p-3 rounded-lg focus:outline-none focus:shadow-outline placeholder:text-sm text-black/90"
            type="text"
            id="section"
            placeholder="Örn: Firma Tanıtımı, Yazılım"
            onChange={(e) => setLog({ ...log, section: e.target.value })}
          />
        </div>
        <div>
          <label className="md:text-sm text-xs font-semibold ml-1">
            Başlık
          </label>
          <input
            className="w-full bg-gray-100 p-3 rounded-lg focus:outline-none focus:shadow-outline placeholder:text-sm text-black/90"
            type="text"
            id="title"
            placeholder="Örn: Form Tasarımı"
            onChange={(e) => setLog({ ...log, title: e.target.value })}
          />
        </div>
        <div>
          <label className="md:text-sm text-xs font-semibold ml-1">Tarih</label>
          <input
            className="w-full bg-gray-100 p-3 rounded-lg focus:outline-none focus:shadow-outline text-black/90"
            type="date"
            placeholder="Date"
            id="date"
            onChange={(e) => setLog({ ...log, date: e.target.value })}
          />
        </div>
      </div>
      <div className="mt-4 mb-2">
        <textarea
          placeholder="İçerik"
          id="content"
          rows={4}
          className="w-full bg-gray-100 p-3 rounded-lg focus:outline-none focus:shadow-outline placeholder:text-sm text-black/90"
          onChange={(e) => setLog({ ...log, content: e.target.value })}
        ></textarea>
      </div>
      <div className="flex justify-end">
        <button
          onClick={saveLog}
          className="uppercase text-sm font-bold tracking-wide bg-blue-900 dark:bg-blue-800 text-gray-100 px-4 py-2 rounded-lg focus:outline-none focus:shadow-outline"
        >
          Kaydet
        </button>
      </div>
    </div>
  );
};

export default LogInputForm;
