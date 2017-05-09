import React from 'react';
import Logos from './Logos';

class NavBar extends React.Component {
    render () {
        return (
            <nav className='navbar navbar-default'>
                <div className='container-fluid'>
                    <Logos />
                </div>
            </nav>
        );
    }
}

export default NavBar;
