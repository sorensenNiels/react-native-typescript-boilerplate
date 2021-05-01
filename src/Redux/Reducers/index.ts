import {HomeReducer} from '@Redux/Reducers/home';
import {combineReducers} from 'redux';

const RootReducer = combineReducers({
  home: HomeReducer
});

export default RootReducer;
