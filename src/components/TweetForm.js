import React from 'react';
import '../css/TweetForm.css';

class TweetForm extends React.Component {
  render () {
    return (
      <div className='col-sm-5' id='tweet-form'>
      <div className="form-group">
        <textarea className="form-control" rows="4" id="comment" placeholder="What's happening?"></textarea>
                  <h6 className="pull-right">140 characters remaining</h6>
                <button className="btn btn-info" type="submit">Tweet</button>
      </div>
      </div>
    );
  }
}

export default TweetForm;
