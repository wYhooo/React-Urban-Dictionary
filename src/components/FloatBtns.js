import React from 'react';
import { Link } from 'react-router-dom';
import style from '../stylesheets/components/FloatBtn.scss';

const arrowStyle = {
  'display': 'block',
  'fontFamily': 'Consolas',
  'fontSize': '.6rem',
  'color': '#fff',
  'transform': 'rotate(-90deg)'
};

function backToTop() {
  window.scrollTo(0, 0);
}

const RandomBtn = () => (
  <Link className={`${style.floatBtn} ${style.randomBtn} ${style.svgIcon}`} to='/random'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
      <path
        d="M26.9 22.6h-1.2c-2.4 0-4.2-1.2-5.9-3-.2.2-.3.4-.5.7-.8 1-1.6 2-2.4 3.1 2.3 2.2 5.1 3.9 8.9 3.9H27v4.1l7.1-6.1-7.1-6.1v3.4zM9.2 14.4c.3-.3.5-.7.8-1.1l2.1-2.7C9.9 8.5 7.2 7 3.6 7H0v4.8h3.6c2.2-.1 4 1 5.6 2.6zm16.5-3h1.2v3.4L34 8.7l-7.1-6.1v4.1h-1.2c-6.3 0-9.8 4.6-12.9 8.7-2.8 3.7-5.2 6.9-9.2 6.9H0V27h3.6c6.3 0 9.8-4.6 12.9-8.7 2.8-3.7 5.2-6.9 9.2-6.9z"/>
    </svg>
  </Link>
);

const BackToTopBtn = () => (
  <a className={`${style.floatBtn} ${style.backToTopBtn} ${style.svgIcon}`} onClick={backToTop}>
    <span style={arrowStyle}>&gt;</span>
  </a>
);
export { RandomBtn, BackToTopBtn };
