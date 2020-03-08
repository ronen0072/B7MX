import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { getFirestore } from 'redux-firestore';
import { getFirebase } from 'react-redux-firebase';
import rootReducer from './reducers';

const initialState = {};

const middlewares = [
    thunk.withExtraArgument(getFirebase)
];
const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware( ...middlewares )
);

export default store;


// const composeEnhancers =
//     process.env.NODE_ENV === 'development' ?
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//         : compose;