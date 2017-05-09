import React from 'react';
import NavBar from './Nav';
import DashboardLeft from './DashboardLeft';
import TwitterFeed from './TwitterFeed';


class App extends React.Component {
    render () {
        return (
            <div className='main container-fluid'>
                <NavBar />
                <DashboardLeft />
                <TwitterFeed />
            </div>
        );
    }
}

export default App;