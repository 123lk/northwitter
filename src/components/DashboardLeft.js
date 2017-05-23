import React from 'react';
import ProfileCard from './ProfileCard';
import TrendsFeed from './TrendsFeed';

class DashboardLeft extends React.Component {
  render () {
    return (
      <div className='col-md-3'>
        <ProfileCard />
        <TrendsFeed />
      </div>
    );
  }
}

export default DashboardLeft;