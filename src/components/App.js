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
                <div className='row'>
                <NavBar />
                    <DashboardLeft />
                    <DashboardCentre />
                    <DashboardRight />
                </div>
            </div>
        );
    }
}

export default App;