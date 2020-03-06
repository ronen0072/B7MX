// import authReducer from './authReducer';
import productstReducer from './productstReducer';
// import messagesReducer from './messagesReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    //auth: authReducer,
    project: productstReducer,
    //messages: messagesReducer,
    // firestore: firestoreReducer,
    // firebase: firebaseReducer
});
export default rootReducer;