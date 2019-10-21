import React from 'react';

import './App.scss';

import Header from './components/Header/Header';
import NewButtons from './components/NewButtons/NewButtons';
import Appointments from './components/Appointments/Appointments';

const App = () => {
  return (
    <div className="app-components">
      <Header />
      <main>
        <NewButtons />
        <Appointments />
      </main>
    </div>
  );
}

export default App;
