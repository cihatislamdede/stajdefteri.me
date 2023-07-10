import { useState } from "react";
import { Log } from "../types";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { toast } from "react-toastify";
import { useCurrentLogStore, useLogStore } from "../stores/logStore";

const LogCard = ({ log }: { log: Log }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const deleteLogState = useLogStore((state) => state.deleteLog);
  const setCurrentLog = useCurrentLogStore((state) => state.setCurrentLog);

  const update = () => {
    setCurrentLog(log);
  };

  const deleteLog = () => {
    deleteLogState(log.id);
    toast.success("Kayıt başarıyla silindi.");
  };

  return (
    <div className="px-8 py-4 bg-slate-100 rounded-lg shadow-md">
      <div className="flex justify-between">
        <span className="text-slate-600">{log.date}</span>
        <span className="px-2 py-1 bg-slate-600 text-slate-100 font-bold rounded">
          {log.section}
        </span>
      </div>
      <div>
        <span className="text-2xl text-slate-700 font-bold hover:text-slate-600">
          {log.title}
        </span>
      </div>
      <p className="mt-2 text-slate-600 max-h-40 overflow-y-auto ml-0.5">
        {log.content}
      </p>
      <div className="flex justify-end items-center mt-4">
        <button
          className="group relative inline-block text-slate-700 underline hover:text-blue-700 duration-300 mr-4"
          onClick={() => {
            update();
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <AiFillEdit className="text-xl" />
          <span className="opacity-0 group-hover:opacity-100 absolute -top-8 -left-5 bg-blue-500 text-white px-2 py-1 rounded-md text-xs duration-300">
            Düzenle
          </span>
        </button>
        <button
          className="group relative inline-block text-slate-700 underline hover:text-red-700 duration-300"
          onClick={() => setIsDeleteModalOpen(true)}
        >
          <AiFillDelete className="text-xl" />
          <span className="opacity-0 group-hover:opacity-100 absolute -top-8 -left-1 bg-red-500 text-white px-2 py-1 rounded-md text-xs duration-300">
            Sil
          </span>
        </button>
      </div>
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white rounded-lg p-4 mx-2">
            <p className="text-xl text-center font-medium">
              <span className="font-semibold italic">"{log.title}"</span>{" "}
              kaydını silmek istediğinize emin misiniz?
            </p>
            <p className="text-center text-red-600">Bu işlem geri alınamaz.</p>
            <div className="flex justify-center mt-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2"
                onClick={deleteLog}
              >
                Sil
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                onClick={() => setIsDeleteModalOpen(false)}
              >
                İptal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogCard;
