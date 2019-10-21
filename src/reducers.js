import { combineReducers } from 'redux';
import DataReducers from './components/NewButtons/reducers';

const rootReducer = combineReducers({
  data: DataReducers
});

export default rootReducer;
