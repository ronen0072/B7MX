import React, {useState, Fragment, useEffect} from 'react';

//import { connect } from 'react-redux'

import {
    Modal,
    Backdrop,
    Grid,
    Fade,
    Button
} from '@material-ui/core';

import {makeStyles} from "@material-ui/core/styles";
//import { clearErrors } from '../../store/actions/errorActions'
import AuthWith from "./AuthWith";

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
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        width: 'calc(250px + 30%)',
        minWidth: '250px'
    },
    local:{
        backgroundColor: '#313033',
        color: '#ffffff',
        padding: theme.spacing(2, 4, 3),
    },
}));


export default  function LoginModal(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    useEffect(()=>{
        if(open){
            if(props.isAuthenticated){
                toggleModal()
            }
        }
    });
    const toggleModal = () => {
        // Clear error
        // props.clearErrors();
        setOpen(!open);
    };

    return (
        <Fragment>
            {props.children?
                <div onClick={toggleModal}>
                    {props.children}
                </div>
                :
                <Button
                    he={'התחברות'}
                    onClick={toggleModal}
                    className={classes.nuvLink}
                    color="inherit">
                    Log in
                </Button>
            }

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={toggleModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Grid container className={classes.paper}>
                        <Grid item xs={12}>
                            <AuthWith/>
                        </Grid>
                    </Grid>
                </Fade>
            </Modal>
        </Fragment>
    );
}
// const mapStateToProps = (state) => ({
//     isAuthenticated: state.auth.isAuthenticated,
//     error: state.error
// });
// export default connect(mapStateToProps,{ clearErrors })(LoginModal);