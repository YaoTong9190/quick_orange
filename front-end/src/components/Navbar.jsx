import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import {Link, useLocation} from 'react-router-dom';

import logo from '../assets/su.png';
import useStyle from './NavbarStyles';
const Navbar = ({totalItems}) => {

    const classes = useStyle();
    const location = useLocation();

    return (
        <div>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    
                    <Typography component={Link} to="/" variant="h6" className = {classes.title} color="inherit">
                        <img src={logo} alt="Shopping site" height = "25px" className = {classes.image} />
                        Quick Orange - SU Online MarketPlace
                    </Typography>
                    
                    <div className={classes.grow}/>
                    {location.pathname === '/'? (
                        <div className={classes.button}>
                            <IconButton component={Link} to="/cart" aria-label = "Show cart Items" color="inherit">
                                <Badge badgeContent={totalItems} color='secondary'>
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>
                    ): null}
                    
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default Navbar;