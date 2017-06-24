import React from 'react';
import style from '../stylesheets/components/Thumbs.scss';

function ThumbUp(props) {
  return (
    <i className={style.thumb}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
        <path
          d="M34 15.3c0-1.9-1.4-3.4-3.1-3.4h-9.7l1.5-7.8v-.5c0-.7-.3-1.4-.6-1.9L20.4 0 10.2 11.2c-.6.5-.9 1.4-.9 2.4v17c0 1.9 1.4 3.4 3.1 3.4h13.9c1.2 0 2.3-.8 2.8-2l4.6-12.1c.2-.3.2-.9.2-1.2v-3.4h.1c0 .2 0 0 0 0zM0 34h6.2V13.6H0V34z">
        </path>
      </svg>
      <span className={style.thumbNum}>{ props.num }</span>
    </i>
  );
}
function ThumbDown(props) {
  return (
    <i className={style.thumb}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
        <path
          d="M27.8 0v20.4H34V0h-6.2zm-6.2 0H7.7C6.5 0 5.4.9 4.9 2L.3 14.1c-.1.3-.3.7-.3 1.2v3.4c0 1.9 1.4 3.4 3.1 3.4h9.7l-1.5 7.8v.5c0 .7.3 1.4.6 1.9l1.7 1.7 10.2-11.2c.6-.7.9-1.5.9-2.4v-17c0-1.9-1.4-3.4-3.1-3.4z">
        </path>
      </svg>
      <span className={style.thumbNum}>{ props.num }</span>
    </i>
  );
}

export { ThumbUp, ThumbDown };