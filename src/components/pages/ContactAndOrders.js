import React, {Fragment, useEffect, useRef, useState} from 'react';
import {Container, Grid, Fab, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import Contact from './Contact'
import Orders from './Orders'
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
const useStyles = makeStyles({
    container: {
        backgroundColor: 'rgba(12,12,39,0.78)',
        color: '#ffffff',
        padding: '40px 6% 0',
        height: '605px',
        marginBottom: '150px',
    },
    wrapper:{
        position: 'relative',
        top: '-90px',
    },
});
export default function ContactAndOrders(props){
    const classes = useStyles();
    const [state, setState] = useState({
        name: '',
        email: '',
        userMessage: '',
        errorMsg: null,
        successMsg: null
    });
    const [openContact, setOpenContact] = useState(true);
    const [openOrders, setOpenOrders] = useState(false);

    const toggle = ()=>{
        console.log('toggle');
        setOpenContact(!openContact);
        setOpenOrders(!openOrders)
    };

    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <Contact open={openContact} toggle={toggle}/>
                <Orders open={openOrders} toggle={toggle}/>
            </div>
        </div>
    );
}