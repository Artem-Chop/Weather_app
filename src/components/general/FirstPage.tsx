import routes from '../../servises/routes';
import { useNavigate } from 'react-router-dom';
import fog from '../../images/fog.png';
import forest from '../../images/forest.png';
import leaves from '../../images/leaves.png';
import logo from '../../images/logo.png';
import raindrops from '../../images/raindrops.png';
import { useEffect } from 'react';
import initializeCanvas from '../../servises/rain';

document.addEventListener('mousemove', e => {
  Object.assign(document.documentElement, {
    style: '',
  });
});

export default function FirstPage() {
  const navigate = useNavigate();

  useEffect(() => {
    initializeCanvas();

    const handleMouseMove = (e: MouseEvent) => {
      Object.assign(document.documentElement, {
        style: `
      --move-x:${(e.clientX - window.innerWidth / 2) * -0.005}deg;
        --move-y:${(e.clientY - window.innerHeight / 2) * 0.01}deg;
        `,
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <div className="main_container">
      <div
        className="main_logo"
        style={{ backgroundImage: `url(${logo})` }}
      ></div>
      <section className="layers">
        <div className="layers_container">
          <div
            className="layers_item item-forest"
            style={{ backgroundImage: `url(${forest})` }}
          ></div>

          <div
            className="layers_item item-leaves"
            style={{ backgroundImage: `url(${leaves})` }}
          ></div>
          <div className="layers_item item-hero">
            <div className="hero">
              <h1>Your personal weather guide</h1>
              <p>always one step ahead of the elements!</p>
              <button
                type="button"
                className="form_button hero_button"
                onClick={() => navigate(routes.weather)}
              >
                let's go
              </button>
            </div>
          </div>
          <div className="layers_item item-rain">
            <canvas className="rain"></canvas>
          </div>
          <div
            className="layers_item item-fog"
            style={{ backgroundImage: `url(${fog})` }}
          ></div>
          <div
            className="layers_item item-raindrops"
            style={{ backgroundImage: `url(${raindrops})` }}
          ></div>
        </div>
      </section>
    </div>
  );
}
