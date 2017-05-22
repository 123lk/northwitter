import * as data from './data';
const user = data.user;

function extractUser (user) {
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

function extractTweetData (res) {
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

  module.exports = {
    extractUser, extractTweetData
  };