import React from "react";
import Modal from "react-modal";
import useTableStore from "../store/useTableStore";

interface EditModalProps {
  closeModal: () => void;
  isOpen: boolean;
}

Modal.setAppElement("#root");

const EditModal: React.FC<EditModalProps> = ({ closeModal, isOpen }) => {
  const selectedRow = useTableStore((state) => state.selectedRow);

  if (!selectedRow) {
    return null;
  }

  console.log("Modal Opened with Selected Row:", selectedRow);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Edit Row"
      className="modal custom-modal"
      overlayClassName="overlay custom-overlay"
    >
      <div className="p-6 bg-white rounded-2xl shadow-xl max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Edit Row</h2>
        <form>
          {Object.entries(selectedRow).map(([key, value]) => (
            <label key={key} className="block mb-4">
              <span className="text-gray-700">{key}:</span>
              <input
                type="text"
                defaultValue={value as string | number}
                className="block w-full mt-2 p-3 border border-gray-300 rounded-lg"
              />
            </label>
          ))}
          <div className="mt-6 flex justify-end space-x-4">
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-700"
            >
              Save
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditModal;
