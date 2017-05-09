import React from 'react';
import Trend from './Trend';
import '../css/TrendsFeed.css';


class TrendsFeed extends React.Component {
  render () {
    return (
      <div className='container-fluid' id='trends-feed'>
      <h3>TrendsFeed</h3>
      <Trend />
      </div>
    );
  }
}

export default TrendsFeed;