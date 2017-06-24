import React from 'react';
import { Link } from 'react-router-dom';
import style from '../stylesheets/components/SearchBar.scss';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: ''
    };
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  componentWillReceiveProps() {
    this.setState({
      value: ''
    });
  }

  render() {
    return (
      <div className={style.search}>
        <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Type any word..."/>
        <Link to={{
          pathname: '/definition',
          search: '?term=' + this.state.value,
        }}>Go</Link>
      </div>
    );
  }
}

export default SearchBar;