import { create } from "zustand";
import { send } from "../service/api.service";

interface User {
  id: string;
  name: string;
  icon: string;
  displayName: string;
}

interface UserStore {
  users: User[];
  fetchUsers: () => void;
  addUser: (user: User) => void;
  updateUser: (id: string, updatedUser: User) => void;
  deleteUser: (id: string) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  users: [],
  fetchUsers: async () => {
    const response = await send<User[]>("/user", "GET");
    set({ users: Array.isArray(response.data) ? response.data : [] });
  },
  addUser: async (user) => {
    const response = await send<User>("/user", "POST", user);
    set((state) => ({ users: [...state.users, response.data] }));
  },
  updateUser: async (id, updatedUser) => {
    await send<User>(`/user/${id}`, "PUT", updatedUser);
    set((state) => ({
      users: state.users.map((user) => (user.id === id ? updatedUser : user)),
    }));
  },
  deleteUser: async (id) => {
    await send<void>(`/user/${id}`, "DELETE");
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    }));
  },
}));
