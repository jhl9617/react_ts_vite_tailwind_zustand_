import React, { useEffect } from "react";
import { useUserStore } from "../store/userStore";

const UserList: React.FC = () => {
  const { users, fetchUsers, deleteUser } = useUserStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (!Array.isArray(users)) {
    // users가 배열인지 확인
    return <div className="text-red-500">Error loading users.</div>;
  }

  return (
    <div>
      {users.map((user) => (
        <div
          key={user.id}
          className="bg-white shadow-md rounded-lg p-4 mb-4 overflow-x-auto opacity-95"
        >
          <h2 className="text-xl font-bold mb-2">{user.name}</h2>
          <p className="text-gray-500 mb-1">{user.icon}</p>
          <p className="text-gray-700 mb-2">{user.displayName}</p>
          <button
            onClick={() => deleteUser(user.id)}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
