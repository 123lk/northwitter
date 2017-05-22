import React from 'react';
import TweetForm from './TweetForm';
import TwitterFeed from './TwitterFeed';
import '../css/DashboardCentre.css';

class DashboardCentre extends React.Component {
  render () {
    return (
        <div className='col-md-6'>
          <TweetForm />
          <TwitterFeed />
        </div>
    );
  }
}

export default DashboardCentre;