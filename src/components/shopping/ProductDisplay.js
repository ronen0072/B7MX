import React, {useState} from 'react';
import {Container, Grid, Fab, TextField, Icon} from "@material-ui/core";
import AddBox from '@material-ui/icons/AddBox';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import More from '@material-ui/icons/More';

//import { connect } from 'react-redux';
//import EditProduct from './EditProduct'
import publicURL from '../../config/publicPath';
import {makeStyles} from "@material-ui/core/styles";
import ProductOption from './ProducOption';

var useStyles = makeStyles(theme => ({
    product:{
        borderRadius: '30px',
        overflow: 'hidden',
        display: 'block',
        backgroundColor: 'black',
        margin: '20px',
        color: 'white',
    },
    content:{
        backgroundColor: 'rgba(0,0,0,0.9)',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    img:{
        width: '100%'
    },
    warp:{
        margin: '1vw 3vw',
    },
    icon:{
        marginRight: '10px'
    }
}));

export default function ProductDisplay (props){
    const [isHover, setIsHover] = useState(false);
    const [options, setOptions] = useState([{index: 0, size: '', quantity: ''}]);
    let classes = useStyles();
    const handleClick = ()=>{
        // const product = props;
        // props.productToDisplay(product);
    };
    const handleAdd = ()=>{
        setOptions([...options, {index: options.length, size: '', quantity: ''}])
    };
    const displayTitle = () => {
        return null;
    };

    const onHover = ()=>{
        setIsHover(true);
    };

    const onblur = ()=>{
        setIsHover(false);
    };
    const handleChange = (index, newOption)=>{
        console.log('handleChange: ',index, newOption);
        let newOptions = options;
        newOptions[index] = {index,...newOption};
        setOptions(newOptions);
        console.log('handleChange: options',options);
    };


    const displayContent = ()=>{
        const product = props;
        return(
            <div className="Product-Display-info-wrapper">
                <p id={"info-"+product.id} className="Product-Display-info Product-Display-info-initiali">{product && product.content}</p>
            </div>
        )
    };

    return(

        <Grid
            item
            xs={10} md={5}
            className={classes.product}
            onTouchEnd={onHover}
            onMouseEnter={onHover}
            onMouseLeave={onblur}
        >
            <div
                style={{backgroundImage: 'url("' + publicURL + props.title + '.jpg")', backgroundSize: '100%'}}
            >
                <div className={(isHover? 'product-display-img-in' : 'product-display-img-out')}/>

                <div className={(isHover? 'product-display-info-in ' : 'product-display-info-out ') + classes.content}>
                    <Grid container className={classes.warp}>
                        <Grid item xs={10}>
                            {options.map((option, index)=>{
                                return <ProductOption key={index} index={index} onChange={handleChange}/>
                            })}
                        </Grid>
                        <Grid item xs={2}>
                            <AddBox
                                onClick={handleAdd}
                                style={{ fontSize: '7vh', marginTop: '5px' }}/>
                        </Grid>
                    </Grid>
                </div>
                <Grid container>

                    <Grid item className={'button'} xs={12} he={'הוסף לסל'}>
                        <AddShoppingCart className={classes.icon}/>
                        Add to cart
                    </Grid>
                </Grid>
            </div>
        </Grid>
    )
}
// const mapDispatchToProps = dispatch => {
//     return {
//         productToDisplay: (product) =>  dispatch({ type: 'PROJECT_TO_DISPLAY', product }),
//     }
//   };
// export default connect(null, mapDispatchToProps)(ProductDisplay);