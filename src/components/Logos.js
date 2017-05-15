import React from 'react';
import '../css/Logos.css';

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
                <li>
                    <img className='twitter-logo' src="https://img.clipartfest.com/60414c58e954d7236837248225e0216f_new-twitter-logo-vector-eps-twitter-logo-clipart-png_518-518.png" alt="twitter-logo" />
                </li>
                <li>
                    <form className="form-inline" id='search'>
                        <input className="form-control mr-sm-2" type="text" placeholder="Search Twitter" />
                    </form>
                </li>
            </ul>
        );
    }
}

export default Logos;
