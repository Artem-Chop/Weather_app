import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import routes from './servises/routes';
import logo from './images/logo.png';

import Weather from './components/weatherComponents/Weather';
import NotFound from './components/general/NotFound';
import FirstPage from './components/general/FirstPage';

const App: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      {window.location.href !== 'http://localhost:3000/' && (
        <button
          type="button"
          onClick={() => {
            navigate(routes.firstPage);
          }}
          className="logo_btn"
        >
          <img src={logo} alt="" className="logo_btn_img" />
        </button>
      )}

      <Routes>
        <Route path={routes.firstPage} element={<FirstPage />} />
        <Route path={routes.weather} element={<Weather />} />
        <Route path={routes.notFound} element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
