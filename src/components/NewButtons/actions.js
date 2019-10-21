export const ADD_DENTIST = 'ADD_DENTIST';
export const ADD_APPOINTMENT = 'ADD_APPOINTMENT';

export const addDentist = (id, name) => dispatch => {
  dispatch({
    type: ADD_DENTIST,
    payload: { id, name }
  });
};

export const addAppointment = (dentistId, dentistName, patientName, startTime, endTime) => dispatch => {
  dispatch({
    type: ADD_APPOINTMENT,
    payload: { dentistId, dentistName, patientName, startTime, endTime }
  });
};
