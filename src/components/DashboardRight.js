import React from 'react';
import TweetForm from './TweetForm';
import TwitterFeed from './TwitterFeed';

class DashboardRight extends React.Component {
  render () {
    return (
        <div className='col-md-7'>
          <TweetForm />
          <TwitterFeed />
        </div>
    );
  }
}

export default DashboardRight;