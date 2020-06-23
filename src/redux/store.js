import { createStore,combineReducers } from 'redux';
import WebSightReducer from './WebsightReducer';

const rootReducer = combineReducers({WebSight:WebSightReducer})
const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store