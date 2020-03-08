// import authReducer from './authReducer';
import productsReducer from './productsReducer';
// import messagesReducer from './messagesReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'


const rootReducer = combineReducers({
    //auth: authReducer,
    products: productsReducer,
    //messages: messagesReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
});
export default rootReducer;