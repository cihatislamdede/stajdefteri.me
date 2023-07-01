import { Log } from "../types";

import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const LogCard = ({ log }: { log: Log }) => {
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
      <p className="mt-2 text-slate-600 max-h-48 overflow-y-auto px-2">
        {log.content}
      </p>
      <div className="flex justify-end items-center mt-4">
        <button className="group relative inline-block text-slate-700 underline hover:text-blue-700 duration-300 mr-4">
          <AiFillEdit className="text-xl" />
          <span className="opacity-0 group-hover:opacity-100 absolute -top-8 -left-5 bg-blue-500 text-white px-2 py-1 rounded-md text-xs duration-300">
            Düzenle
          </span>
        </button>
        <button className="group relative inline-block text-slate-700 underline hover:text-red-700 duration-300">
          <AiFillDelete className="text-xl" />
          <span className="opacity-0 group-hover:opacity-100 absolute -top-8 -left-1 bg-red-500 text-white px-2 py-1 rounded-md text-xs duration-300">
            Sil
          </span>
        </button>
      </div>
    </div>
  );
};

export default LogCard;
