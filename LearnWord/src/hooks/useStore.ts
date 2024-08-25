import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Name } from "../types/Name";

type StoreData = {
  first: string;
  last: string;
  actions: {
    setStore: (name: Name, value: string) => void;
  };
};

export const useStore = create<StoreData>()(
  persist(
    (set, get) => ({
      first: "",
      last: "",
      actions: {
        setStore: (name: Name, value: string) => {set({ ...get(), [name]: value })},
      },
    }),
    {
      name: "tanya-zustand-example",
      storage: createJSONStorage(() => localStorage),
      partialize: state => ({ ...state, actions: undefined }),
    },
  ),
);