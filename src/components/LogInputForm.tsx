import { toast } from "react-toastify";
import { useLogStore, useCurrentLogStore } from "../stores/logStore";

const LogInputForm = () => {
  const log = useCurrentLogStore((state) => state.currentLog);
  const setLog = useCurrentLogStore((state) => state.setCurrentLog);
  const clearCurrentLog = useCurrentLogStore((state) => state.clearCurrentLog);

  const addLog = useLogStore((state) => state.addLog);
  const updateLog = useLogStore((state) => state.updateLog);
  const logs = useLogStore((state) => state.logs);

  const saveLog = () => {
    if (log.section && log.title && log.date && log.content) {
      if (logs.length > 0) {
        const update = log.id != 0;
        const today = new Date(log.date);
        const isDayHasLog = logs.some(
          (l) =>
            new Date(l.date).getDate() === today.getDate() && l.id !== log.id
        );
        if (isDayHasLog) {
          toast.info("Bu tarihe ait kayıt zaten mevcut.");
          return;
        }
        if (update) {
          updateLog(log);
          toast.success("Kayıt başarıyla güncellendi.");
        } else {
          log.id = logs[logs.length - 1].id + 1;
          addLog(log);
          toast.success("Kayıt başarıyla eklendi.");
        }
      } else {
        log.id = 1;
        addLog(log);
        toast.success("Kayıt başarıyla eklendi.");
      }
      clearCurrentLog();
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
            value={log.section}
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
            value={log.title}
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
            value={log.date}
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
          value={log.content}
        ></textarea>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => saveLog()}
          className="uppercase text-sm font-bold tracking-wide bg-blue-900 dark:bg-blue-800 text-gray-100 px-4 py-2 rounded-lg focus:outline-none focus:shadow-outline"
        >
          {log.id === 0 ? "Kaydet" : "Güncelle"}
        </button>
        {log.id !== 0 && (
          <button
            onClick={() => clearCurrentLog()}
            className="uppercase text-sm font-bold tracking-wide bg-red-900 dark:bg-red-800 text-gray-100 px-4 py-2 rounded-lg focus:outline-none focus:shadow-outline ml-2"
          >
            İptal
          </button>
        )}
      </div>
    </div>
  );
};

export default LogInputForm;
