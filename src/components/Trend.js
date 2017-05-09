import React from 'react';

class Trend extends React.Component {
  render () {
    return (
      <div className='container-fluid' id='trend'>
      <h5>{this.props.name}</h5>
      <h5>{this.props.number}</h5>
      </div>
    );
  }
}

export default Trend;