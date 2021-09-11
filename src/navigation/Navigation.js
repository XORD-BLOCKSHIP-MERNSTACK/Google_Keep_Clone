import React from 'react';

// Navigation
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Custom Components
import Notes from '../containers/Notes';
import Archieve from '../containers/Archieve';
import Bin from '../containers/Bin';

// Temporary Data
const notes = [
  {
    id: 1,
    title: 'My First Note',
    note: 'first thing i have to do',
    pin: false,
  },
  {
    id: 2,
    title: 'My Second Note',
    note: 'Second thing i have to do',
    pin: true,
  },
];

const Navigation = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' render={() => <Notes notes={notes} />} />
        <Route
          exact
          path='/archieve'
          render={() => <Archieve archievedNotes={notes} />}
        />
        <Route exact path='/bin' render={() => <Bin deletedNotes={notes} />} />
      </Switch>
    </Router>
  );
};

export default Navigation;
