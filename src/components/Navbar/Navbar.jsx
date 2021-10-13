import React from 'react';
import './Navbar.css'
import { CssBaseline } from '@material-ui/core';

const Navbar = () => {
    return (
        <React.Fragment>
            <div className='backgrd'>
            <CssBaseline/>
            <h2 className='navtitle'>MyMusic.</h2>
            <div className='title'>
                <h3>welcome to <br/>
                my music.</h3>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Navbar;