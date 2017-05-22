import React from 'react';
import NavBar from './Nav';
import DashboardLeft from './DashboardLeft';
import DashboardCentre from './DashboardCentre';
import DashboardRight from './DashboardRight';
import '../main.css';


class App extends React.Component {
    render () {
        return (
            <div className='container-fluid'>
                <NavBar />
                <div className='row'>
                    <DashboardLeft />
                    <DashboardCentre />
                    <DashboardRight />
                </div>
            </div>
        );
    }
}

export default App;