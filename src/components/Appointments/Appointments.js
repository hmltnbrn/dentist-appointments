import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import * as moment from 'moment';

import { connect } from 'react-redux';

import './Appointments.scss';

const Appointments = ({ appointments }) => {
  return (
    <>
      <h2>Appointments</h2>
      <div className="appointments">
        {appointments.length > 0 ? (
          appointments.map((app, index) => {
            return (
              <Card key={index} className="card">
                <CardContent>
                  <h3>Dr. {app.dentistName}'s appointment with {app.patientName}</h3>
                  <h4>Start Time</h4>
                  <p>{moment.unix(app.startTime).format('dddd, MMMM Do YYYY, h:mm a')}</p>
                  <h4>End Time</h4>
                  <p>{moment.unix(app.endTime).format('dddd, MMMM Do YYYY, h:mm a')}</p>
                </CardContent>
              </Card>
            );
          })
        ) : (
          <p>No appointments scheduled</p>
        )}
      </div>
      
    </>
  );
}

const mapStateToProps = (state) => ({
  appointments: state.data.appointments
});

export default connect(mapStateToProps)(Appointments);
