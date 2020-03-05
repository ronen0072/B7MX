import React from 'react';
import {NavLink} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {Button, BottomNavigation, Hidden} from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        width: 500,
    },
    footer:{
        bottom: 0,
        right: 0,
        left: 0,
        position: 'fixed',
        backgroundColor: '#0b0b0b',
    },
    nuvLink:{
        lineHeight: '2rem',
        paddingTop: '1.5rem',
        color: '#fff'
    },
});

export default function Footer() {
    const classes = useStyles();

    return (
        <Hidden xsDown>
            <BottomNavigation
                className={classes.footer}
            >
                <NavLink to='/' ><Button className={classes.nuvLink}>Home</Button></NavLink>
                <NavLink to='/About' ><Button className={classes.nuvLink}>About</Button ></NavLink>
                <NavLink to='/Contact' ><Button className={classes.nuvLink}>Contact Us</Button ></NavLink>
                <NavLink to='/login us admin' ><Button className={classes.nuvLink}>login us admin</Button></NavLink>
            </BottomNavigation>
        </Hidden>
    );
}
