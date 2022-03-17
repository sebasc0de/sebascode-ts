import create, { GetState, SetState } from 'zustand';

interface MyState {
  show: boolean;
  setShow: () => void;
}

export const TestimonialStore = create(
  (setState: SetState<MyState>, getState: GetState<MyState>): MyState => {
    return {
      show: false,
      setShow: () => {
        setState((state) => ({ show: !state.show }));
      },
    };
  }
);
