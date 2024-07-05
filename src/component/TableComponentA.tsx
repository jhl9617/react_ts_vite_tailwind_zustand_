import React from "react";
import { TableRowA } from "../model/types";
import useTableStore from "../store/useTableStore";

interface TableComponentProps {
  data: TableRowA[];
  openModal: () => void;
}

const TableComponentA: React.FC<TableComponentProps> = ({
  data,
  openModal,
}) => {
  const setSelectedRow = useTableStore((state) => state.setSelectedRow);

  const handleRowClick = (row: TableRowA) => {
    setSelectedRow(row);
    console.log("Selected Row in TableComponentA:", row);
    openModal();
  };

  return (
    <div className="overflow-x-auto opacity-95 rounded-lg shadow-md">
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border-b border-gray-300">Name</th>
            <th className="py-2 px-4 border-b border-gray-300">Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              onClick={() => handleRowClick(row)}
              className="hover:bg-gray-50 cursor-pointer"
            >
              <td className="py-2 px-4 border-b border-gray-300">{row.name}</td>
              <td className="py-2 px-4 border-b border-gray-300">
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponentA;
