import React from 'react';
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Carousel from '../layouts/Carousel';

var useStyles = makeStyles({
    container: {
        backgroundColor: '#b8d7cd',
        color: '#000',
        textAlign: 'left',
        minHeight: '200px',
        padding: '80px 6% 120px',
        marginTop: '40px',
    },
    title:{
        color: '#fff',
        borderRadius: '0 0 70px 70px',
        textAlign: 'center',
        marginTop: '-80px',
        paddingTop: '30px',
        paddingBottom: '30px',
        backgroundColor: '#171717',
        marginBottom: 'calc(5px + 2vw)',
    },
    text:{
        paddingRight: '2%',
        textAlign: 'justify',
        marginBottom: '20px'
    },
});
function About(props){
    let classes = useStyles();
    return (
        <Grid container className={classes.container}>
            <Grid item xs={12} >
                <h1 className={classes.title}>About Us</h1>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.text}>
                We are a local BMX group from a southern city in israel called "beer sheva".
                Our name is B7MX and  it's a combination of Beer Sheva (B7) and BMX.
                We ride bmx bikes, enjoy life, and the sunny israeli spots.
                We are also a shirts company that are all designed by ourselves.
                Every year we arrange the biggest bmx jam in israel called "purim jam" a big and fun event to the bmx community in israel.
                In the jam we go through some of beer sheva's best street spot and finish at the best bikepark in israel located in beer sheva.
            </Grid>
            <Grid item xs={12} sm={6} className={'content'}>
                <Carousel/>
            </Grid>
        </Grid>
    );
}

export default About;