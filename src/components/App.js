import React from 'react';
import NavBar from './Nav';
import DashboardLeft from './DashboardLeft';
import TwitterFeed from './TwitterFeed';
import TweetForm from './TweetForm';


class App extends React.Component {
    render () {
        return (
            <div className='container-fluid'>
                <NavBar />
                <DashboardLeft />
                <TweetForm />
                <TwitterFeed />
            </div>
        );
    }
}

export default App;