import React from 'react';
import NavBar from './Nav';
import DashboardLeft from './DashboardLeft';
import TwitterFeed from './TwitterFeed';
import TweetForm from './TweetForm';
import WhoToFollow from './WhoToFollow';

class App extends React.Component {
    render () {
        return (
            <div className='main container-fluid'>
                <NavBar />
                <DashboardLeft />
                <TweetForm />
                <TwitterFeed />
                <WhoToFollow />
            </div>
        );
    }
}

export default App;