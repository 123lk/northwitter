import React from 'react';
import '../css/Nav.css';

class NavBar extends React.Component {
    render () {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-data" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>

                    <div className="collapse navbar-collapse" id="nav-data">
                        <div className='navbar-left'>
                            <ul className="nav navbar-nav" id='nav-items'>
                                <li className='left-nav'>
                                    <span className='glyphicon glyphicon-home' aria-hidden='true'></span>
                                    <span className='nav-link'>Home</span>
                                </li>
                                <li className='left-nav'>
                                    <span className='glyphicon glyphicon-fire' aria-hidden='true'></span>
                                    <span className='nav-link'>Moments</span>
                                </li>
                                <li className='left-nav'>
                                    <span className='glyphicon glyphicon-bell' aria-hidden='true'></span>
                                    <span className='nav-link'>Notifications</span>
                                </li>
                                <li className='left-nav'>
                                    <span className='glyphicon glyphicon-envelope' aria-hidden='true'></span>
                                    <span className='nav-link'>Messages</span>
                                </li>
                            </ul>
                        </div>
                            <span className='hidden-sm'>
                                <img id='logo' src="https://img.clipartfest.com/60414c58e954d7236837248225e0216f_new-twitter-logo-vector-eps-twitter-logo-clipart-png_518-518.png" alt="twitter-logo" />
                            </span>
                        <form className="navbar-form navbar-right">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search Twitter" />
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;
