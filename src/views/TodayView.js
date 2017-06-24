import React from 'react';
import axios from 'axios';
import Word from '../components/Word';
import style from '../stylesheets/views/View.scss';

class TodayView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defIdArr: []
    };
  }

  componentDidMount() {
    axios.get('//localhost:3001/api/today').then(res =>
      this.setState({ defIdArr: res.data })
    ).catch(err => {
      console.error(err);
    });
  }

  getToday() {
    let options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    return new Date().toLocaleDateString('en', options).split(',')[1].trim();
  }

  render() {
    let wordView;
    if (this.state.defIdArr.length) {
      wordView = this.state.defIdArr.map(defId =>
        <Word defid={defId} key={defId}/>
      );
    } else {
      wordView = null;
    }
    return (
      <div className={style.view}>
        <span className={style.tip}>Word of Last 7 Days</span>
        { wordView }
      </div>
    );
  }
}

export default TodayView;
