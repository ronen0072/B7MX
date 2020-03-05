import React, {Fragment, useState} from 'react';
import ProductDisplay from './ProductDisplay';
import {makeStyles} from "@material-ui/core/styles";
//import { connect } from 'react-redux';
import {Grid} from "@material-ui/core";

var useStyles = makeStyles({
    root: {
        flexGrow: 1,
        marginLeft: 'auto',
        marginRight: 'auto',
        height: '100%'
    },
    products:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default function Products(props){
    let classes = useStyles();
    const [products, setProducts] =  useState([{id: 1, name: 'White shirt'},{id: 2, name: 'Black shirt'}]);
    return(
        <Grid container className={classes.products}>
            {products.map((product)=>{
                return <ProductDisplay title={product.name} key={product.id}/>
            })}
        </Grid>
    )
  }
  // const mapStateToProps =(state)=>{
  //   return{
  //       state: state,
  //   }
  // };
  // export default connect(mapStateToProps)(Product);