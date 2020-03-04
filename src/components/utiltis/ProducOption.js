import React, {useState, useRef, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {InputLabel, FormHelperText, FormControl, Select, NativeSelect} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root:{
        display: 'flex',
        justifyContent: 'flex-end',
    },
    quantity: {
        minWidth: 90,
        color: 'rgb(255,250,247)',
        marginRight: '15px'
    },
    size: {
        minWidth: 60,
        color: 'rgb(255,250,247)',
        marginRight: '5px'
    },
    selectEmpty: {
        color: 'rgb(255,250,247)',
    },
    label: {
        color: '#ffffff',
        marginLeft: '5px'
    },
    select: {
        color: '#ffffff',
        backgroundColor: 'rgba(255,250,247,0.09)',
        borderRadius: '4px',
        paddingLeft: '10px'
    },
    option:{
        color: '#0c0c0c',
    }
}));

export default function ProductOption(props) {
    const classes = useStyles();
    const [state, setState] = useState({
        size: '',
        quantity: '',
    });

    const inputLabel = useRef(null);
    const [labelWidth, setLabelWidth] = useState(0);
    useEffect(() => {
        // setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleChange = name => event => {
        setState({
            ...state,
            [name]: event.target.value,
        });
        props.onChange(props.index, {...state,  [name]: event.target.value});
    };

    return (
        <div className={classes.root}>
            <FormControl className={classes.quantity}>
                <InputLabel className={classes.label}  htmlFor="age-native-simple">כמות</InputLabel>
                <Select
                    native
                    value={state.age}
                    onChange={handleChange('quantity')}
                    inputProps={{
                        name: 'quantity',
                        id: 'quantity-native-simple',
                        className: classes.select
                    }}
                >
                    <option className={classes.option} value="" />
                    <option className={classes.option} value={1}>1</option>
                    <option className={classes.option} value={2}>2</option>
                    <option className={classes.option} value={3}>3</option>
                    <option className={classes.option} value={4}>4</option>
                    <option className={classes.option} value={5}>5</option>
                    <option className={classes.option} value={6}>6</option>
                </Select>
            </FormControl>
            <FormControl className={classes.size}>
                <InputLabel className={classes.label} htmlFor="age-native-simple">מידה</InputLabel>
                <Select
                    native
                    value={state.age}
                    onChange={handleChange('size')}
                    inputProps={{
                        name: 'size',
                        id: 'size-native-simple',
                        className: classes.select
                    }}
                >
                    <option className={classes.option} value="" />
                    <option className={classes.option} value={'S'}>S</option>
                    <option className={classes.option} value={'M'}>M</option>
                    <option className={classes.option} value={'L'}>L</option>
                    <option className={classes.option} value={'XL'}>XL</option>
                    <option className={classes.option} value={'XXl'}>XXL</option>
                </Select>
            </FormControl>
        </div>
    );
}
