import React, { useState } from "react";
// import UserForm from "./component/UserForm";
// import UserList from "./component/UserList";
// import BearCounter from "./component/BearCounter";
// import EditModal from "./component/EditModal";
// import TableComponentB from "./component/TableComponentB";
// import TableComponentA from "./component/TableComponentA";
// import { TableRowA, TableRowB } from "./model/types";
import "./index.css";
// import Card from "./component/Card";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

// const dataA: TableRowA[] = [
//   { id: 1, name: "Item 1", value: "Value 1" },
//   { id: 2, name: "Item 2", value: "Value 2" },
// ];

// const dataB: TableRowB[] = [
//   { id: 1, title: "Title 1", description: "Description 1" },
//   { id: 2, title: "Title 2", description: "Description 2" },
// ];

const App: React.FC = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);

  return (
    // <div className="bg-custom-bg">
    //   <div className=" bg-cover  bg-center min-h-screen max-w-screen-lg mx-auto p-4 space-y-8 font-sans">
    //     <div className="space-y-4">
    //       <TableComponentA data={dataA} openModal={openModal} />
    //       <TableComponentB data={dataB} openModal={openModal} />
    //     </div>
    //     <EditModal isOpen={isModalOpen} closeModal={closeModal} />
    //     <div className="space-y-4">
    //       <h1 className="text-2xl font-bold">User Management</h1>
    //       <UserForm />
    //       <UserList />
    //       <BearCounter />
    //     </div>
    //     <div className="flex flex-wrap justify-center space-x-4">
    //       <Card
    //         title="Card 1"
    //         description="This is the description for card 1."
    //       />
    //       <Card
    //         title="Card 2"
    //         description="This is the description for card 2."
    //       />
    //       <Card
    //         title="Card 3"
    //         description="This is the description for card 3."
    //       />
    //     </div>
    //     <div className="space-y-4">
    //       <button className="bg-primary text-white py-3 px-6 rounded-xl hover:bg-blue-500">
    //         가입 신청하기
    //       </button>
    //       <button className="bg-secondary text-white py-3 px-6 rounded-xl hover:bg-red-500">
    //         삭제
    //       </button>
    //       <button className="border border-primary text-primary py-3 px-6 rounded-xl hover:bg-blue-100">
    //         추가
    //       </button>
    //       <div className="flex space-x-2">
    //         <input
    //           type="email"
    //           placeholder="EMAIL 주소 입력"
    //           className="border border-gray-300 py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
    //         />
    //         <button className="bg-primary text-white py-3 px-6 rounded-xl hover:bg-blue-500">
    //           인증 메일 발송
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <RouterProvider router={router} />
  );
};

export default App;
