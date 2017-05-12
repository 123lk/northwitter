import React from 'react';
import Trend from './Trend';
import request from 'superagent';
import '../css/TrendsFeed.css';


class TrendsFeed extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      trends: []
    };
  }
  componentDidMount () {
    request 
    .get('https://protected-oasis-31937.herokuapp.com/trends')
    .end(function (err, res) {
      if (err) return console.log(err);
      this.setState({
        trends: res.body.tweetData.trends[0].trends.slice(0,10)
      });
    }.bind(this));
  }
  render () {
    return (
      <div id='trends-feed'>
        <h4>Trends</h4>
        {this.state.trends.map((trend, i) => {
          return <Trend key={i} name={trend.name} number={trend.tweet_volume} />;
        })}
      </div>
    );
  }
}

export default TrendsFeed;