import { createStore,combineReducers,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';

import WebSightReducer from './WebsightReducer';
const middlewares = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({WebSight:WebSightReducer})
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(...middlewares)))
export default store