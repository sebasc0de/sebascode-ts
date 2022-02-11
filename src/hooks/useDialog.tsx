import { useState } from 'react';

export const useDialog = (): any => {
  // Window state controler
  const [state, setState] = useState(true);

  // Message state controler
  const [message, setMessage] = useState('Selecciona una caracteristca!');

  // Toggle handler
  const toggleShowHandler = () => {
    setState(!state);
  };

  // Hide handler
  const hideShowHandler = () => {
    setState(false);
  };

  return { state, message, toggleShowHandler, hideShowHandler };
};
