import React from 'react';

class Logos extends React.Component {
    render () {
        return (
            <ul className='icons-ul'>
                <li>
                    <span className='glyphicon glyphicon-home' aria-hidden='true'></span>
                    <span className='nav-link'>Home</span>
                </li>
                <li>
                    <span className='glyphicon glyphicon-fire' aria-hidden='true'></span>
                    <span className='nav-link'>Moments</span>
                </li>
                <li>
                    <span className='glyphicon glyphicon-bell' aria-hidden='true'></span>
                    <span className='nav-link'>Notifications</span>
                </li>
                <li>
                    <span className='glyphicon glyphicon-envelope' aria-hidden='true'></span>
                    <span className='nav-link'>Messages</span>
                </li>
            </ul>
        );
    }
}

export default Logos;
