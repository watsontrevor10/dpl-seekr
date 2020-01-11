import React, {useState} from 'react';
import JobViewForm from './JobViewForm';
import Backdrop from './Backdrop';
import Task from './Tasks';
import Interviews from "./Interviews"; 
import Contacts from "./Contacts";
import ContactForm from "./ContactForm"; 
import Notes from "./Notes";
import NotesForm from "./NotesForm"; 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Modal = (props) => {
  const [tabIndex, setTabIndex] = useState(0)
  
  return (
    <>
    <Backdrop show={props.show} hide={props.hide} />
    <Tabs className="main-modal-container">
      <TabList className="tab-list">
        <Tab selectedIndex={tabIndex} onSelect={tabIndex => setTabIndex({ tabIndex })}>Job Info</Tab>
        <Tab selectedIndex={tabIndex} onSelect={tabIndex => setTabIndex({ tabIndex })}>Interviews</Tab>
        <Tab selectedIndex={tabIndex} onSelect={tabIndex => setTabIndex({ tabIndex })}>Tasks</Tab>
        <Tab selectedIndex={tabIndex} onSelect={tabIndex => setTabIndex({ tabIndex })}>Notes</Tab>
        <Tab selectedIndex={tabIndex} onSelect={tabIndex => setTabIndex({ tabIndex })}>Contact</Tab>
      </TabList>
      <TabPanel className="tab-container">
        <JobViewForm job={props.job} handleUpdate={props.handleUpdate}/>
      </TabPanel>
      <TabPanel className="tab-container">
        <Interviews id={props.job.id}/>
      </TabPanel>
      <TabPanel className="tab-container">
        <Task id={props.job.id} />
      </TabPanel>
      <TabPanel className="tab-container">
        <Notes id={props.job.id}/>
      </TabPanel>
      <TabPanel className="tab-container" >
        <Contacts id={props.job.id}/>
      </TabPanel>
    </Tabs>
    </>
  )
}

export default Modal