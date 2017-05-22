import React from 'react';
import '../css/WhoToFollow.css';

class WhoToFollow extends React.Component {
  render () {
    return (
      <div id='wtf-table'>
      <h4 id='wtf-title'>Who to follow</h4>
      <img src="https://pbs.twimg.com/profile_images/866604421903515648/KqR5kZvD_bigger.jpg" id="profile-pic" alt='pic'/>
      <span id='user-name'>Laura Kenny</span>
      <span id='user-handle'>@this_lk</span>
      <div>
       <a className="btn btn-info" type="submit" id='follow-button' href='https://twitter.com/this_lk'>Follow</a>
      </div>
      </div>
    );
  }
}

export default WhoToFollow; 