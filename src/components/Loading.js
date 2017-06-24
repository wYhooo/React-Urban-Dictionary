import React from 'react';
import style from '../stylesheets/components/Loading.scss';

class Loading extends React.Component {
  render() {
    return (
      <div className={style.loading}>
        Loading...
      </div>
    );
  }
}

export default Loading;
