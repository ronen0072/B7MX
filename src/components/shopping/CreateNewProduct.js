import React from 'react';
import { connect } from 'react-redux';
import Modal from '../layout/Modal'
import { createNewProduct } from '../../store/actions/productActions';
import ItemsList from '../utils/ItemsList';

function CreateNewProduct() {
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
    createProject: (project) => dispatch(createProject(project))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewProduct);