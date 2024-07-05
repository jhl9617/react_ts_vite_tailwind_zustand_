// src/components/TableComponentB.tsx
import React from "react";
import useTableStore from "../store/useTableStore";
import { TableRowB } from "../model/types";

interface TableComponentProps {
  data: TableRowB[];
  openModal: () => void;
}

const TableComponentB: React.FC<TableComponentProps> = ({
  data,
  openModal,
}) => {
  const setSelectedRow = useTableStore((state) => state.setSelectedRow);

  const handleRowClick = (row: TableRowB) => {
    setSelectedRow(row);
    console.log("Selected Row in TableComponentB:", row);
    openModal();
  };

  return (
    <div className="overflow-x-auto opacity-95 rounded-lg shadow-md">
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b border-gray-300">Title</th>
            <th className="py-2 px-4 border-b border-gray-300">Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              onClick={() => handleRowClick(row)}
              className="hover:bg-gray-50 cursor-pointer"
            >
              <td className="py-2 px-4 border-b border-gray-300">
                {row.title}
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponentB;
