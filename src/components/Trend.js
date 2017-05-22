import React from 'react';
import '../css/TrendsFeed.css';

class Trend extends React.Component {
  render () {
    return (
      <div id='trend'>
        <h5 className='trend-title'>{this.props.name}</h5>
        <h5 className='no-of-tweets'>{this.props.number} Tweets</h5>
      </div>
    );
  }
}

export default Trend;