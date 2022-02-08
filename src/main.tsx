import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Modal from './components/UI/Modal/Modal';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/wordpress' element={<Modal />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
