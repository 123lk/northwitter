import React from 'react';
import Tweet from './Tweet';
import request from 'superagent';
import '../css/TwitterFeed.css';

class TwitterFeed extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      tweets: []
    };
  }
  componentDidMount () {
    request
      .get('https://protected-oasis-31937.herokuapp.com/tweets')
      .end(function (err, res) {
        if (err) return console.log(err);
        this.setState({
          tweets: this.extractTweetData(res)
        });
      }.bind(this));
  }
  extractTweetData (res) {
    let tweets = res.body.reduce(function (acc, tweetGroup) {
      return acc.concat(tweetGroup.tweets);
    }, []);
    tweets = tweets.filter(function (tweet) {
      return !tweet.errors;
    });
    tweets = tweets.sort(function (a, b) {
      const aTime = Date.parse(a.created_at);
      const bTime = Date.parse(b.created_at);
      return bTime - aTime; 
    });
    return tweets.slice(0, 25);
  }
  render () {
    return (
      <div className='col-sm-5' id='twitter-feed'>
        {this.state.tweets.map((tweet, i) => {
          return (
            <Tweet
              key={i}
              avatar={tweet.user.profile_image_url}
              name={tweet.user.name}
              handle={tweet.user.screen_name}
              content={tweet.text}
              date={tweet.created_at}
            />
          );
        })}
      </div>
    );
  }
}

export default TwitterFeed;