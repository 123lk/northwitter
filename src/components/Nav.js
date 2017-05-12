import React from 'react';
import Logos from './Logos';
import '../main.css';

class NavBar extends React.Component {
    render() {
        return (
            <nav className='navbar navbar-default'>
                <div>
                    <Logos />
                </div>
            </nav>
        );
    }
}

export default NavBar;
