import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './pages/App';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
