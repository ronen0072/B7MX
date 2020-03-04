import React, {Component} from 'react';
import { connect } from 'react-redux';
import { updateProduct } from '../../store/actions/productActions';

function EditProduct(){
 return(
     null
 )
}
const mapStateToProps = (state) => {
  return {
    isLogin: !state.firebase.auth.isEmpty
  }
};
const mapDispatchToProps = dispatch => {
  return {
    updateProject: (project) => dispatch(updateProduct(project)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);