import React from 'react';
import '../css/Tweet.css';

class Tweet extends React.Component {
  render () {
    return (
      <div className='container-fluid' id='tweet'>
        <img src={this.props.avatar} />
        <h3>{this.props.name}</h3>
        <h3>{this.props.handle}</h3>
        <h3>{this.props.content}</h3>
        <h3>{this.props.date}</h3>
      </div>
    );
  }
}

export default Tweet;