import React, {Component} from 'react';
import {ProductDisplay} from './ProductDisplay';
//import { connect } from 'react-redux';
import Section from '../layout/Section';
//import EditProduct from './EditProductt';
import publicURL from '../../config/publicPath'
import {Grid} from "@material-ui/core";
import More from "@material-ui/core/SvgIcon/SvgIcon";
export default function Product(props){

    const displayTitle = () => {
        return null;
    };
    const displayImg = ()=>{
        const product = props;
        return(
            <img id={"img_"+product.id } src={"url("+publicURL+(product && product.imgFileName)+".jpg )"}>
            </img>
        )
    };

    const displayEdit = ()=>{
        let product = props;
        if(product && (product.githubURL && product.githubURL !== '')){
            return(
                <span className={"no-margin no-padding"} style={{zIndex: '1'}}>
                    {/*<EditProduct product={product} className="btn-style btn-product" />*/}
                </span>
            )
        }
    };

    const displayContent = ()=>{
        const product = props;
        return(
            <p className="product-info">{product && product.content}</p>
        )
    };
    {/*<Grid item className={'button'} xs={6}>*/}
    {/*    <More className={classes.icon}/>*/}
    {/*    עוד*/}
    {/*</Grid>*/}
    return(
        <Section className="row no-margin">
            < button className="modal-close btn-floating fixed-in-right close"><i className="material-icons">close</i></button>
            <div className="product-wrapper">
                <div className="col s12 m12 l5">
                    <div className='row'>
                        {displayImg()}
                    </div>
                </div>
                <div className="col s12 m12 l7 no-padding">
                        {displayContent()}
                </div>
            </div>
        </Section>
    )
  }
  // const mapStateToProps =(state)=>{
  //   return{
  //       state: state,
  //   }
  // };
  // export default connect(mapStateToProps)(Product);