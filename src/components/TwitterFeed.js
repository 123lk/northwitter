import React from 'react';
import Tweet from './Tweet';
import '../css/TwitterFeed.css';

class TwitterFeed extends React.Component {
  render () {
    return (
      <div className='col-sm-5' id='twitter-feed'>
      <h3>TwitterFeed</h3>
      <Tweet />
      </div>
    );
  }
}

export default TwitterFeed;