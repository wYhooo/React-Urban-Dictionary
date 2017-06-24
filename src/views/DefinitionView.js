import React from 'react';
import axios from 'axios';
import queryString from 'query-string';
import Word from '../components/Word';
import style from '../stylesheets/views/View.scss';

class DefinitionView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defItems: []
    };
    this.fetchDefineByTerm = this.fetchDefineByTerm.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.fetchDefineByTerm(queryString.parse(nextProps.location.search).term);
  }

  componentDidMount() {
    this.fetchDefineByTerm(queryString.parse(this.props.location.search).term);
  }

  fetchDefineByTerm(term) {
    axios.get(`//api.urbandictionary.com/v0/define?term=${term}`).then(res =>
      this.setState({ defItems: res.data })
    ).catch(err => {
      console.error(err);
    });
  }

  render() {
    let wordView;
    if (this.state.defItems.list && this.state.defItems.list.length) {
      wordView = this.state.defItems.list.map(item =>
        <Word defid={item.defid} key={item.defid}/>
      );
    }
    else if (this.state.defItems.result_type === 'no_results') {
      wordView = (<div style={{ 'fontSize': '.5rem', 'margin': '.5rem 0' }}>
        <p style={{ 'marginBottom': '.5rem' }}>¯\_(ツ)_/¯</p>
        <p>Sorry, there's nothing to show.</p>
      </div>);
    }
    else wordView = null;
    return (
      <div className={style.view}>
        <span className={style.tip}>Top Definitions</span>
        { wordView }
      </div>
    );
  }
}

export default DefinitionView;
