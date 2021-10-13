import React from 'react';
import './Navbar.css'
import { CssBaseline } from '@material-ui/core';

const Navbar = () => {
    return (
        <React.Fragment>
            <div className='backgrd'>
            <CssBaseline/>
            <h2 className='navtitle'>MyMusic.</h2>
            </div>
        </React.Fragment>
    );
}

export default Navbar;