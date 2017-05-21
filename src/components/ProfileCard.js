import React from 'react';
import '../css/ProfileCard.css';
import request from 'superagent';

class ProfileCard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      user_data: {}
    };
  }
  componentDidMount () {
    request
      .get('https://protected-oasis-31937.herokuapp.com/tweets/northcoders')
      .end(function (err, res) {
        if (err) return console.log(err);
        this.setState({
          user_data: this.extractUser(res)
        });
      }.bind(this));
  }
  extractUser (res) {
    const user = res.body.tweetData[0].user;
    return {
      username: user.name,
      handle: '@' + user.screen_name,
      tweets: user.statuses_count,
      followers: user.followers_count,
      following: user.friends_count,
      avatar_url: user.profile_image_url,
      background_image: user.profile_banner_url
    };
  }
  render () {
    return (
      <div id='profile-card'>
        <div className='profile-card-upper'>
          <img src={this.state.user_data.background_image} id='profile-background-image' role='presentation' />
          <img src={this.state.user_data.avatar_url} id='profile-avatar' role='presentation' />
          <div className='user-details'>
            <span id='user-name'>{this.state.user_data.username}</span>
            <span id='user-handle'>{this.state.user_data.handle}</span>
          </div>
        </div>
        <div className='profile-card-lower'>
          <p className='text-center'>
          <div className='profile-tweets'>
            <p><b>TWEETS</b></p>
            <span className='profile-tweets-number'>{this.state.user_data.tweets}</span>
          </div>
          <div className='profile-following'>
            <p><b>FOLLOWING</b></p>
            <span className='profile-following-number'>{this.state.user_data.following}</span>
          </div>
          <div className='profile-followers'>
            <p><b>FOLLOWERS</b></p>
            <span className='profile-followers-number'>{this.state.user_data.followers}</span>
          </div>
          </p>
        </div>
      </div>
    );
  }
}

export default ProfileCard;