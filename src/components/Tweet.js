import React from 'react';
import '../css/Tweet.css';

class Tweet extends React.Component {
  render () {
    return (
      <div className='container-fluid' id='tweet'>
        <img src={this.props.avatar} />
        <h5>{this.props.name}</h5>
        <h5>{this.props.handle}</h5>
        <h5>{this.props.content}</h5>
        <h5>{this.props.date}</h5>
      </div>
    );
  }
}

export default Tweet;