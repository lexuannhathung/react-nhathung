import {combineReducers} from 'redux';
import global_reducer from './globals/global-reducer';
import sidebar_reducer from './sidebars/sidebar-reducer';

const rootReducer =  combineReducers({
    global: global_reducer,
    sidebar: sidebar_reducer
})
export default rootReducer;