import create, { GetState, SetState } from 'zustand';

interface MyState {
  show: boolean;
  message?: string;
  setMessage: (message: string, windowState: boolean) => void;
  toggleShowHandler?: () => void;
  hideShowHandler: () => void;
}

export const DialogStore = create(
  (setState: SetState<MyState>, getState: GetState<MyState>): MyState => {
    return {
      show: true,
      message: 'Te muestro mi portfolio!',
      setMessage: (msg, windowState) => {
        if (!windowState) {
          setState((state) => ({ message: msg, show: true }));
          setTimeout(() => {
            setState((state) => ({
              message: 'Elige otra opcion...',
              show: false,
            }));
          }, 10000);
        }
      },
      toggleShowHandler: () => setState((state) => ({ show: !state.show })),
      hideShowHandler: () => setState((state) => ({ show: false })),
    };
  }
);
