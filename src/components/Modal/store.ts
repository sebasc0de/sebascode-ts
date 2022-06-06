import create from "zustand";

interface ModalStore {
  isOpen: boolean;
  setIsOpen: () => void;
}

export const ModalStore = create<ModalStore>((setState, getState) => ({
  isOpen: false,
  setIsOpen: () => {
    const state = getState().isOpen;
    setState({
      isOpen: !state,
    });
  },
}));
