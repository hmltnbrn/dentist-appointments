import { ADD_DENTIST, ADD_APPOINTMENT } from './actions';

const initialState = {
  dentists: [],
  appointments: []
};

const DataReducers = function(state = initialState, action) {
  switch(action.type) {
    case ADD_DENTIST:
      return {
        ...state,
        dentists: [...state.dentists, action.payload]
      };
    case ADD_APPOINTMENT:
      return {
        ...state,
        appointments: [...state.appointments, action.payload]
      };
    default:
      return state;
  }
};

export default DataReducers;
