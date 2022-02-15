import create, { GetState, SetState } from 'zustand';

interface MyState {
  blog: boolean;
  landingPage: boolean;
  ecommerce: boolean;
  courses: boolean;
  toggleShowBlog?: () => void;
  toggleShowLandingPage?: () => void;
  toggleShowCourses?: () => void;
  toggleShowEcommerce: () => void;
}

export const SelectorStore = create(
  (setState: SetState<MyState>, getState: GetState<MyState>): MyState => {
    return {
      blog: false,
      landingPage: false,
      ecommerce: true,
      courses: false,
      toggleShowEcommerce: () =>
        setState((state) => ({ ecommerce: !state.ecommerce })),
    };
  }
);
