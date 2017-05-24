import React from 'react';
import '../css/WhoToFollow.css';

class WhoToFollow extends React.Component {
  render() {
    return (
      <div id='wtf-table'>
        <h4 id='wtf-title'>Who to follow</h4>
        <img src="https://pbs.twimg.com/profile_images/866604421903515648/KqR5kZvD_bigger.jpg" id="profile-pic" alt='pic' />
        <a id='user-name' href="https://twitter.com/this_lk">Laura Kenny</a>
        <span id='user-handle'>@this_lk</span>
        <div>
          <a className="btn btn-info btn-sm" type="submit" id='follow-button' href='https://twitter.com/this_lk'>Follow</a>
        </div>
        <img src="https://pbs.twimg.com/profile_images/829003860429664258/nwmVMiAx.jpg" id="profile-pic" alt='pic' />
        <a id='user-name' href="https://twitter.com/WITNorthUK">WIT North (UK)</a>
        <span id='user-handle'>@WITNorthUK</span>
        <div>
          <a className="btn btn-info btn-sm" type="submit" id='follow-button' href='https://twitter.com/WITNorthUK'>Follow</a>
        </div>
        <img src="https://pbs.twimg.com/profile_images/826786122638426114/PR4tsq-i.jpg" id="profile-pic" alt='pic' />
        <a id='user-name' href="https://twitter.com/dan_abramov">Dan Abramov</a>
        <span id='user-handle'>@dan_abramov</span>
        <div>
          <a className="btn btn-info btn-sm" type="submit" id='follow-button' href='https://twitter.com/dan_abramov'>Follow</a>
        </div>
        <img src="https://pbs.twimg.com/profile_images/546011298627334146/MAeF2-yK.jpeg" id="profile-pic" alt='pic' />
        <a id='user-name' href="https://twitter.com/Real_CSS_Tricks">CSS-Tricks</a>
        <span id='user-handle'>@Real_CSS_Tricks</span>
        <div>
          <a className="btn btn-info btn-sm" type="submit" id='follow-button' href='https://twitter.com/Real_CSS_Tricks'>Follow</a>
        </div>
      </div>
    );
  }
}

export default WhoToFollow; 