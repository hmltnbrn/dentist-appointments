import React from 'react';

import './NewButtons.scss';

import NewDentist from './NewDentist';
import NewAppointment from './NewAppointment';

const NewButtons = () => {
  return (
    <div className="new-buttons-container">
      <NewDentist />
      <NewAppointment />
    </div>
  );
}

export default NewButtons;
