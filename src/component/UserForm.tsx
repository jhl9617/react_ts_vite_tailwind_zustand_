import React, { useState } from "react";
import { useUserStore } from "../store/userStore";

const UserForm: React.FC = () => {
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const [displayName, setDisplayName] = useState("");
  const addUser = useUserStore((state) => state.addUser);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addUser({ id: "", name, icon, displayName });
    setName("");
    setIcon("");
    setDisplayName("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-4 overflow-x-auto opacity-95"
    >
      <div className="mb-4 ">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
          placeholder="Icon"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          placeholder="Display Name"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Add User
      </button>
    </form>
  );
};

export default UserForm;
