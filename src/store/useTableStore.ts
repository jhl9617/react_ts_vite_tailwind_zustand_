import { create } from "zustand";
import { TableRow } from "../model/types";

interface TableState {
  selectedRow: TableRow | null;
  setSelectedRow: (row: TableRow) => void;
}

const useTableStore = create<TableState>((set) => ({
  selectedRow: null,
  setSelectedRow: (row) => set({ selectedRow: row }),
}));

export default useTableStore;
