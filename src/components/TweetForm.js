import React from 'react';
import '../css/TweetForm.css';

class TweetForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      charLeft: 140
    };
  }
  handleChange (event) {
    let input = event.target.value;
    if (input.length <= 140) {
      this.setState({
        charLeft: 140 - input.length
      });
    }
  }
  clearContents () {
    document.getElementById('comment').value = '';
    this.setState({
      charLeft: 140
    });
  }
  render () {
    return (
      <div id='tweet-form'>
        <div className="form-group">
          <textarea 
          className="form-control" 
          rows="2" 
          id="comment" 
          placeholder="What's happening?" 
          onChange={this.handleChange.bind(this)} 
          maxLength='140'
          >
          </textarea>
          <button 
          className="btn btn-info" 
          id='tweet-button' 
          onClick={this.clearContents.bind(this)}
          type="submit">Tweet</button>
          <span className='charLeft'>{this.state.charLeft}</span>
        </div>
      </div>
    );
  }
}

export default TweetForm;
