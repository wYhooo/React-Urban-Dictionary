import React from 'react';
import axios from 'axios';
import Word from '../components/Word';
import style from '../stylesheets/views/View.scss';

class RandomView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defItems: []
    };
    this.fetchRandomDefine = this.fetchRandomDefine.bind(this);
  }

  componentWillReceiveProps() {
    this.fetchRandomDefine();
  }

  componentDidMount() {
    this.fetchRandomDefine();
  }

  fetchRandomDefine() {
    axios.get(`//api.urbandictionary.com/v0/random`).then(res =>
      this.setState({ defItems: res.data.list })
    ).catch(err => {
      console.error(err);
    });
  }

  render() {
    let wordView;
    if (this.state.defItems.length) {
      wordView = this.state.defItems.map(item =>
        <Word defid={item.defid} key={item.defid}/>
      );
    } else {
      wordView = null;
    }
    return (
      <div className={style.view}>
        <span className={style.tip}>10 Random Definitions</span>
        { wordView }
      </div>
    );
  }

}

export default RandomView;
