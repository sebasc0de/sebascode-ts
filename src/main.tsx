import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './pages/App';
import Configurator from './components/Configurator/Configurator';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/wordpress' element={<Configurator />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
