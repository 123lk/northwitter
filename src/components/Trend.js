import React from 'react';

class Trend extends React.Component {
  render () {
    return (
      <div className='container-fluid' id='trend'>
      <p>{this.props.name}</p>
      <h5>{this.props.number} Tweets</h5>
      </div>
    );
  }
}

export default Trend;