import React from 'react';

// Navigation
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Custom Components
import Notes from '../containers/Notes';
import Archieve from '../containers/Archieve';
import Bin from '../containers/Bin';
import Header from '../components/Bar/Header';

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
  {
    id: 3,
    title: 'My Third Note',
    note: 'Third thing i have to do',
    pin: false,
  },
  {
    id: 4,
    title: 'My Fourth Note',
    note: 'Fourth thing i have to do',
    pin: true,
  },
  {
    id: 5,
    title: 'My Fifth Note',
    note: 'Fifth thing i have to do',
    pin: false,
  },
  {
    id: 6,
    title: 'My Sixth Note',
    note: 'Sixth thing i have to do',
    pin: true,
  },
];

const Navigation = () => {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route exact path='/' render={() => <Notes notes={notes} />} />
          <Route
            exact
            path='/archieve'
            render={() => <Archieve archievedNotes={notes} />}
          />
          <Route
            exact
            path='/bin'
            render={() => <Bin deletedNotes={notes} />}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default Navigation;
