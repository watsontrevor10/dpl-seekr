import React from 'react';
import Home from './components/Home';
import Jobs from './components/Jobs'
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import NotesForm from './components/NotesForm';
import Login from './components/Login';
import Register from './components/Register';
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import { Switch, Route, } from 'react-router-dom';
import "./stylesheets/App.scss";

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <div>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path='/jobs' component={Jobs} />
          <ProtectedRoute exact path="/jobs/:job_id/new_note" component={NotesForm} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </FetchUser>
  </>
)

export default App;