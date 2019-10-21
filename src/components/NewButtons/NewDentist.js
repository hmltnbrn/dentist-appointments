import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

import randomstring from 'randomstring';

import { connect } from 'react-redux';
import { addDentist } from './actions';

import './ButtonPaper.scss';

const NewDentist = ({ addDentist }) => {
  const [name, setName] = useState('');
  const [errorText, setErrorText] = React.useState(false);

  const newDentist = () => {
    if(name === '') {
      setErrorText("All fields not set");
      return;
    }
    addDentist(randomstring.generate(), name);
    setName('');
    setErrorText(false);
  }

  return (
    <div>
      <Paper className="paper">
        <h3>New Dentist</h3>
        {errorText && (
          <div className="error-text">{errorText}</div>
        )}
        <form noValidate>
          <FormControl>
            <TextField
              label="Name"
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={newDentist}
          >
            Add Dentist
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default connect(null, { addDentist })(NewDentist);
