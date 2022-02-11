import create, { GetState, SetState } from 'zustand';

interface MyState {
  show: boolean;
  toggleShowHandler?: () => void;
  hideShowHandler?: () => void;
}

export const DialogStore = create(
  (setState: SetState<MyState>, getState: GetState<MyState>): MyState => {
    return {
      show: true,
      toggleShowHandler: () => setState((state) => ({ show: !state.show })),
      hideShowHandler: () => setState((state) => ({ show: false })),
    };
  }
);
