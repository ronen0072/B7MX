import React, { useState, useEffect} from 'react';
import {Grid, Container} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import Products from '../shopping/Products';


var useStyles = makeStyles({
    root: {
        flexGrow: 1,
        marginLeft: 'auto',
        marginRight: 'auto',
        height: '100%'
    },
    opening: {
        backgroundColor: '#171717',
        color: '#ffffff',
        textAlign: 'left',
        minHeight: '200px',
        padding: '20px 7%',
        marginBottom: '-140px',
        paddingBottom: '150px',
    },
});


function Home(props){
    let classes = useStyles();
    const [products, setProducts] =  useState([{id: 1, name: 'White shirt'},{id: 2, name: 'Black shirt'}]);
    const heHeader = ' לקראת ג\'אם פורים הכנו עיצוב חדש לחולצות שלנו כמו בכל שנה יהיה ניתן לרכוש אותן באירוע עצמו אך השנה יהיה ניתן גם לרכוש לשלם מראש ולהבטיח שיהיה חולצה במידה שלכם!\n';
    const enHeader = 'For Purim Jam we have prepared a new design for our shirts, as every year they can be purchased at the event itself but this year you can also purchase to pay in advance and ensure there is a shirt to your size!';
    useEffect(()=>{
        },
        []
    );


    return (
        <div className={classes.root}>
            <Grid container className={classes.opening}>
                <Grid item sx={12} className={classes.content}>
                    {enHeader}
                </Grid>
            </Grid>
            <Products/>
        </div>
    );
}

export default Home;