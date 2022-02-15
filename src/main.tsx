import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Configurator from './components/Configurator/Configurator';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/wordpress' element={<Configurator />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
