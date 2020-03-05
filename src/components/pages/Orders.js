import React, {Fragment, useEffect, useRef, useState} from 'react';
import {Container, Grid, Fab, TextField} from "@material-ui/core";
import Send from '@material-ui/icons/Send';
import {makeStyles} from "@material-ui/core/styles";
//import {connect} from "react-redux";
//import {sendMessage} from "../../store/actions/messagesActions";
import Alert from "@material-ui/lab/Alert/Alert";
import Carousel from "../layouts/Carousel";
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';


const useStyles = makeStyles(theme => ({
    wrapper:{
        position: 'relative',
        top: '-40px',
    },
    title:{
        borderRadius: '70px',
        textAlign: 'center',
        paddingTop: '30px',
        paddingBottom: '30px',
        backgroundColor: '#171717',
        zIndex: 1,
    },
    titleText:{
        marginTop: 0,
        marginBottom: 0,
    },
    open:{
        marginTop: '-20px',
        marginBottom: '-25px',
        color: '#fff',
        height: '54px',
    },
    icon:{
        transform: 'rotate(90deg)',
        fontSize: '50px'
    },
    content:{
        position: 'relative',
        top: '60px',
        borderRadius: ' 70px 70px 0 0',
        textAlign: 'justify',
        backgroundColor: '#f2f0ec',
    },
    padding:{
        paddingTop: '50px',
        paddingBottom: '40px',
        paddingRight: '30px',
    },
    error: {
        height: '50px',
    },
    sendIcon: {
        marginLeft: '10px',
    },
    sendButton: {
        marginLeft: 'calc(50% - 40px)',
    },

    innerContent: {
        margin: '30px',
        width: 'auto'
    }
}));

export default function Orders(props){
    const classes = useStyles();
    const [hover, setHover] = useState(false);

    return (
        <Grid container className={classes.wrapper} onMouseOver={()=>{setHover(true)}} onMouseOut={()=>{setHover(false)}}>
            <Grid item xs={12} className={classes.content +(props.open? ' contact-open' : ' contact-close')}>
                <div className={classes.padding}>
                </div>
            </Grid>
            <Grid item xs={12} className={classes.title} onClick={props.toggle}>
                <div className={classes.open}>
                    <ArrowBackIos  className={classes.icon +(props.open? ' fid-out' :(hover? ' fid-in-hover' : ' fid-in'))}/>
                </div>
                <h1 className={classes.titleText}>My Orders</h1>
            </Grid>
        </Grid>
    )

}
// const mapStateToProps = (state) => ({
//     isAuthenticated: state.auth.isAuthenticated,
//     user: state.auth.user,
//     error: state.error,
//     messages: state.messages
// });
// export default connect(mapStateToProps,{ sendMessage })(TextNinjaHOC(Contact));