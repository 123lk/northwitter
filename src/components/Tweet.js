import React from 'react';
import '../css/Tweet.css';

class Tweet extends React.Component {
  render () {
    return (
      <div id='tweet'>
        <img className='user-avatar' role='presentation' src={this.props.avatar} />
        <a id='tweet-user-name' href={`https://twitter.com/${this.props.handle}`}>{this.props.name}</a>
        <span>  @{this.props.handle}</span>
        <h5 className='tweet-content'>{this.props.content}</h5>
        <div className="tweet-icons">
          <span className="glyphicon glyphicon-share-alt" aria-hidden="true"></span>
          <span className="glyphicon glyphicon-retweet" aria-hidden="true"></span>
          <span>{this.props.retweets}</span>
          <span className="glyphicon glyphicon-heart" aria-hidden="true"></span>
          <span>{this.props.favs}</span>
        </div>
      </div>
    );
  }
}

export default Tweet;
