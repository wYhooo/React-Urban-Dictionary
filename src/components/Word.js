import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from './Loading';
import { ThumbUp, ThumbDown } from './Thumbs';
import style from '../stylesheets/components/Word.scss';

class Word extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    if (this.props.defid) {
      axios.get('//api.urbandictionary.com/v0/define?defid=' + this.props.defid).then(res => {
        this.setState({ data: res.data.list[0] });
      }).catch(err => {
        console.error(err);
      });
    }
  }

  render() {
    if (Object.keys(this.state.data).length) {
      let wordInfo = this.state.data;
      return (
        <Link className={style.wordView} to={{
          pathname: '/definition',
          search: '?term=' + wordInfo.word,
        }}>
          <h1 className={style.word}>{wordInfo.word}</h1>
          <div className={style.definition}>{wordInfo.definition}</div>
          <div className={style.example}>{wordInfo.example}</div>
          <div className={style.author}>by {wordInfo.author}</div>
          <div className={style.thumbs}>
            <ThumbUp num={wordInfo.thumbs_up}/>
            <ThumbDown num={wordInfo.thumbs_down}/>
          </div>
        </Link>
      );
    }
    return <Loading/>;
  }
}

export default Word;
