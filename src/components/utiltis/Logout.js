import React, {Fragment} from 'react';
//import { connect } from 'react-redux'
import { Button } from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
//import { logout } from '../../store/actions/authActions'
const useStyles = makeStyles(theme => ({
    root:{
        color: '#ffffff',
    },
    nuvLink:{
        fontSize: '1.1rem',
        lineHeight: '2rem',
        marginTop: '1.5rem',
        color: '#fff'
    },
}));


export default  function Logout(props) {
    const classes = useStyles();

    return (
        <Fragment>
           {props.children?
               <div
                   // onClick={props.logout}
               >
                  {props.children}
               </div>
                   :
               <Button
                   he={'התנתק'}
                   // onClick={props.logout}
                   className={classes.nuvLink}
                   color="inherit">
                   Logout
               </Button>
           }
        </Fragment>
    );
}

// export default connect(null,{ logout })(Logout);