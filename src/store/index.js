import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {getFirestore, reduxFirestore} from 'redux-firestore';
import {getFirebase, reactReduxFirebase} from 'react-redux-firebase';
import rootReducer from './reducers';
import fbConfig from "../config/fbConfig";

const composeEnhancers =
    process.env.NODE_ENV === 'development' ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
        : compose;

const middleWare = [applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(fbConfig,  {userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true}), // redux binding for firebase
    reduxFirestore(fbConfig) // redux bindings for firestore
];

const store = createStore(rootReducer, composeEnhancers(...middleWare));
export default store;


