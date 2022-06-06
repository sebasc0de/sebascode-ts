import { ModalStore } from "./store";

export const ModalToggler = () => {
  const setIsOpen = ModalStore((state) => state.setIsOpen);

  return (
    <div
      onClick={setIsOpen}
      className="fixed bottom-2 left-2 w-14 bg-gradient-to-r from-blue-500 z-50 cursor-pointer to-blue-600 rounded-full p-2 shadow-md shadow-blue-600/80 transition transform hover:-translate-y-1"
    >
      <img src="./img/sebas.png" />
    </div>
  );
};
