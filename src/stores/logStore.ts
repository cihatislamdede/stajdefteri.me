// initiliaze the store with zustand

import { create } from "zustand";
import { Log } from "../types";

type LogStore = {
  logs: Log[];
  addLog: (log: Log) => void;
  deleteLog: (id: number) => void;
  updateLog: (log: Log) => void;
};

type CurrentLogStore = {
  currentLog: Log;
  setCurrentLog: (log: Log) => void;
  clearCurrentLog: () => void;
};

export const useCurrentLogStore = create<CurrentLogStore>((set) => ({
  currentLog: {
    id: 0,
    section: "",
    title: "",
    date: "",
    content: "",
  },
  setCurrentLog: (log) => {
    set(() => ({ currentLog: log }));
  },
  clearCurrentLog: () => {
    set(() => ({
      currentLog: {
        id: 0,
        section: "",
        title: "",
        date: "",
        content: "",
      },
    }));
  },
}));

export const useLogStore = create<LogStore>((set) => ({
  logs: JSON.parse(localStorage.getItem("logs") || "[]"),

  addLog: (log) => {
    set((state) => ({ logs: [...state.logs, log] }));
    updateLocalStorage();
  },

  deleteLog: (id) => {
    set((state) => ({
      logs: state.logs.filter((log) => log.id !== id),
    }));
    updateLocalStorage();
  },

  updateLog: (log) => {
    set((state) => ({
      logs: state.logs.map((l) => (l.id === log.id ? log : l)),
    }));
    updateLocalStorage();
  },
}));

const updateLocalStorage = () => {
  localStorage.setItem("logs", JSON.stringify(useLogStore.getState().logs));
};
