import React from 'react';
import '../css/ProfileCard.css';
import request from 'superagent';

class ProfileCard extends React.Component {
  constructor  (props) {
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
      background_image: user.profile_background_image_url
    };
  }
  render () {
    return (
      <div className='container-fluid' id='profile-card'>
        <img src={this.state.user_data.background_image} id='profile-background-image'/>
        <h3>{this.state.user_data.username}</h3>
        <h4>{this.state.user_data.handle}</h4>
        <img src={this.state.user_data.avatar_url} id='profile-avatar'/>
        <h5>Tweets{this.state.user_data.tweets}</h5>
        <h5>Following{this.state.user_data.following}</h5>
        <h5>Followers{this.state.user_data.followers}</h5>
      </div>
    );
  }
}

export default ProfileCard;