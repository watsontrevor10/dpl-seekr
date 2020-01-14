import React from 'react';
import Contacts from './components/Contacts';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Jobs from './components/Jobs';
import Modal from './components/Modal';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Notes from './components/Notes'
import NotesForm from './components/NotesForm';
import Login from './components/Login';
import Register from './components/Register';
import TasksDue from './components/TasksDue';
import TaskClass from './components/TaskClass';
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import { Switch, Route, } from 'react-router-dom';
import Tasks from './components/Tasks';
import "./stylesheets/App.scss";
import JobViewForm from './components/JobViewForm';
import Interviews from './components/Interviews';
import ListContainer from './components/ListContainer';


const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <div>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path='/jobs' component={Jobs} />
          <ProtectedRoute exact path='/dashboard' component={ListContainer} />
          <ProtectedRoute exact path='/jobs/:job_id/notes' component={Notes} />
          <ProtectedRoute exact path="/jobs/:job_id/new_note" component={NotesForm} />
          <ProtectedRoute exact path="/jobs/:job_id/contacts" component={Contacts} />
          <ProtectedRoute exact path="/jobs/:job_id/tasks" component={Tasks} />
          <ProtectedRoute exact path="/jobs/:id" component={JobViewForm} />
          <ProtectedRoute exact path="/job/:id" component={Modal} />
          <ProtectedRoute exact path="/jobs/:job_id/interviews" component={Interviews} />
          {/* <ProtectedRoute exact path="/tasks/tasks_due" component={TasksDue} /> */}
          <ProtectedRoute exact path="/tasks/tasks_due" component={TaskClass} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </FetchUser>
  </>
)

export default App;