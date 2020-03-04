import React, {Fragment ,useState, useRef, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
//import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    Drawer,
    Hidden,
    IconButton,
    Typography,
    Button,
    List,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
    Icon,
    ClickAwayListener,
    Grow,
    Paper,
    Popper,
    MenuItem,
    MenuList,


} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import LoginAndSignUpModal from '../auth/LoginAndSignUpModal';
import Logout from "../auth/Logout";
import publicURL from "../../config/publicPath";



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#171717',
        color: '#ffffff'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    alignRight:{
        marginLeft: 'auto'
    },
    nav: {
        backgroundColor: '#171717',
        color: '#ffffff',
        boxShadow: 'none',
    },
    nuvLink:{
        fontSize: '1.3rem',
        lineHeight: '2rem',
        marginBottom: '2.8rem',
        color: '#fff'
    },
    links: {
        display: 'inline-block !important',
    },
    practiceItem:{
        paddingLeft: '40px',
    },
    practice: {
        backgroundColor: 'rgba(0,0,0,0.02)',
    },
    logo:{
        width: '230px',
        marginTop: '15px'
    }
}));

export default function Header(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const anchorRef = useRef(null);
    const icons = ['Home', 'About', 'Contact Us'];
    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen);
    };

    const handleClose = event => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === "Tab") {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    const sideList = (side) => {
        let iconsName = ['home', 'info', 'contact_mail'];
        return(
            <div
                className={classes.list}
                role="presentation"
                //onKeyDown={toggleDrawer(side, false)}
            >
                <List>
                    {['בית', 'עלינו', 'צור קשר'].map((text, index) => (
                        <NavLink to={'/'+text} key={text}  onClick={toggleDrawer(side, false)}>
                            <ListItem button>
                                <ListItemIcon> <Icon>{iconsName[index]}</Icon> </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        </NavLink>
                    ))}
                    {/*{props.auth.isAuthenticated &&*/}
                        <NavLink to='/Words List'  onClick={toggleDrawer(side, false)}>
                            <ListItem button className={classes.practiceItem}>
                                <ListItemIcon> <Icon>shopping-cart-two-tone</Icon> </ListItemIcon>
                                <ListItemText primary='My Order' />
                            </ListItem>
                        </NavLink>
                    {/*}*/}
                </List>
                <Divider />
                <List>
                    {/*{!props.auth.isAuthenticated?*/}
                    <LoginAndSignUpModal>
                        <ListItem button key={'Login'} >
                            {/*<ListItemIcon> </ListItemIcon>*/}
                            <ListItemText primary={'Login'} />
                        </ListItem>
                    </LoginAndSignUpModal> :
                    <Logout>
                        <ListItem button key={'Logout'}  onClick={toggleDrawer(side, false)}>
                            {/*<ListItemIcon> </ListItemIcon>*/}
                            <ListItemText primary={'Logout'} />
                        </ListItem>
                    </Logout>
                    {/*}*/}
                </List>
            </div>
        );
    };
    const mdBar = () => {
        return(
            <Hidden xsDown>
                <div className={classes.links}>
                    {/*{props.auth.isAuthenticated &&*/}
                    <NavLink to='/My Order' ><Button className={classes.nuvLink} color="inherit">העגלה שלי</Button></NavLink>
                    {/*}*/}
                    <NavLink to='/Contact Us' ><Button className={classes.nuvLink} color="inherit">צור קשר</Button></NavLink>
                    <NavLink to='/About' ><Button className={classes.nuvLink} color="inherit">עלינו</Button></NavLink>
                    <NavLink to='/' ><Button className={classes.nuvLink} color="inherit">בית</Button></NavLink>
                </div>
            </Hidden>
        )
    };


    return (
        <AppBar position="static" className={classes.nav}>
            <Toolbar>

                <Hidden xsDown>
                    {/*{!props.auth.isAuthenticated? */}
                    <LoginAndSignUpModal/>
                    {/*:*/}
                    <Logout/>
                    {/*}*/}
                </Hidden>
                <Hidden smUp>
                    <IconButton onClick={toggleDrawer('left', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                        {sideList('left')}
                    </Drawer>
                </Hidden>

                <div className={classes.alignRight}>
                    {mdBar()}
                    <Typography variant="h3">
                        <NavLink to='/' ><img className={classes.logo} src={publicURL + 'b7mx-logo.gif'} /></NavLink>
                    </Typography>
                </div>
            </Toolbar>
        </AppBar>
    );
}
// const mapStateToProps = (state)=>({
//     auth: state.auth
// });
//
// export default connect(mapStateToProps)(Header);