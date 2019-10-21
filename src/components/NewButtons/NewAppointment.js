import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import * as moment from 'moment';

import { connect } from 'react-redux';
import { addAppointment } from './actions';

import './ButtonPaper.scss';

const NewAppointment = ({ dentists, appointments, addAppointment }) => {
  const [name, setName] = useState('');
  const [dentistId, setDentistId] = React.useState('');
  const [startTime, setStartTime] = React.useState(moment().format('YYYY-MM-DDThh:mm'));
  const [endTime, setEndTime] = React.useState(moment().format('YYYY-MM-DDThh:mm'));
  const [open, setOpen] = React.useState(false);
  const [errorText, setErrorText] = React.useState(false);

  const newAppointment = () => {
    const dentistAppointments = appointments.filter(app => app.dentistId === dentistId);
    const dentist = dentists.filter(den => den.id === dentistId);
    const uStart = moment(startTime).unix();
    const uEnd = moment(endTime).unix();
    if(dentistId === '' || name === '' || startTime === '' || endTime === '') {
      setErrorText("All fields not set");
      return;
    }
    if(uStart < moment(new Date()).unix()) {
      setErrorText("Appointments must be in the future");
      return;
    }
    if(uStart >= uEnd) {
      setErrorText("Start time must be before end time");
      return;
    }
    if(uStart + 1800 > uEnd) {
      setErrorText("Appointment must be 30 minutes");
      return;
    }
    for(let i=0; i<dentistAppointments.length; i++) {
      if(dentistAppointments[i].startTime === uStart) {
        setErrorText("Two appointments can't start at the same time");
        return;
      }
    }
    addAppointment(dentistId, dentist[0].name, name, uStart, uEnd);
    setName('');
    setDentistId('');
    setStartTime(moment().format('YYYY-MM-DDThh:mm'));
    setEndTime(moment().format('YYYY-MM-DDThh:mm'));
    setErrorText(false);
  }

  return (
    <div>
      <Paper className="paper">
        <h3>New Appointment</h3>
        {errorText && (
          <div className="error-text">{errorText}</div>
        )}
        {dentists.length > 0 ? (
          <form noValidate>
            <FormControl>
              <InputLabel htmlFor="open-select">Dentist</InputLabel>
              <Select
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                value={dentistId}
                onChange={event => setDentistId(event.target.value)}
                inputProps={{
                  name: 'dentist-id',
                  id: 'open-select',
                }}
              >
                {dentists.map(den => {
                  return <MenuItem key={den.id} value={den.id}>{den.name}</MenuItem>
                })}
              </Select>
            </FormControl>
            <FormControl>
              <TextField
                label="Patient Name"
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </FormControl>
            <FormControl>
              <TextField
                id="datetime-local"
                label="Start Time"
                // defaultValue={moment().format('YYYY-MM-DDThh:mm')}
                onChange={event => setStartTime(event.target.value)}
                value={startTime}
                type="datetime-local"
              />
            </FormControl>
            <FormControl>
              <TextField
                id="datetime-local"
                label="End Time"
                // defaultValue={moment().format('YYYY-MM-DDThh:mm')}
                onChange={event => setEndTime(event.target.value)}
                value={endTime}
                type="datetime-local"
              />
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={newAppointment}
            >
              Add Appointment
            </Button>
          </form>
        ) : (
          <p>You need dentists first</p>
        )}
      </Paper>
    </div>
  );
}

const mapStateToProps = (state) => ({
  dentists: state.data.dentists,
  appointments: state.data.appointments
});

export default connect(mapStateToProps, { addAppointment })(NewAppointment);
