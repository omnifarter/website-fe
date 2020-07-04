import { createStore,combineReducers } from 'redux';
import MouseReducer from './mouseReducer';

const rootReducer = combineReducers({MeetupMouse:MouseReducer})
const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store