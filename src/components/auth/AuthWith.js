import React, {Fragment} from 'react';
// import { connect } from 'react-redux'
// import firebase from "firebase";
import { loginFacebook } from '../../store/actions/authActions'
import Facebook from '@material-ui/icons/Facebook';
import {makeStyles} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";
import PopModal from '../layouts/PopModal'

const useStyles = makeStyles(theme => ({
    root:{
    },
    socialNetwork:{
        backgroundColor: '#ffffff',
        color: '#00000',
        width: 'auto',
        justifyContent: 'center',
        fontSize: 'inherit',
    },
    nuvLink:{
        fontSize: '1.1rem',
        lineHeight: '2rem',
        marginTop: '1.5rem',
        color: '#fff'
    },
    title:{
        borderRadius: '0 0 50px 50px',
        textAlign: 'center',
        marginTop: '-43px',
        padding: '30px 20px',
        paddingBottom: '30px',
        backgroundColor: '#171717',
        color: '#fff',

    },
    modal:{
        justifyContent: 'center',
    },
}));
export default function AuthWith(props){
    const classes = useStyles();
    return(
        <PopModal
            className={classes.modal}
            title={<h2 className={classes.title}>Log in with social network</h2>}>
            {props.children?
                <div>
                    {props.children}
                </div>
                :
                <Button
                    he={'התחברות'}
                    className={classes.nuvLink}
                    color="inherit">
                    Log in
                </Button>
            }
            <div className={classes.socialNetwork}>


                <a  href="http://localhost:5000/auth/facebook" ><button className="social-login facebook">Log in with facebook  <Facebook/></button></a>
                <a  href="http://localhost:5000/auth/google" ><button className="social-login google">Log in with Google+</button></a>

            </div>
        </PopModal>
    );
}
// const mapStateToProps = (state) => {
//     return{
//         authError: state.auth.authError,
//         isLogin: !state.firebase.auth.isEmpty
//     }
// };
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         loginFacebook: (creds) => dispatch(loginFacebook(creds))
//     }
// };
// export default connect(mapStateToProps, mapDispatchToProps)(AuthWith);