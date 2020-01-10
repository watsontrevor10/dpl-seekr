import React, {useState} from 'react';
import JobViewForm from './JobViewForm';
import Backdrop from './Backdrop';
import Task from './Tasks';
import Interviews from "./Interviews"; 
import Contact from "./Contacts";
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
      <TabPanel>
        <div 
          style={{
            transform: props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: props.show ? "1" : "0"
          }}
        >
          <JobViewForm handleUpdate={props.handleUpdate}  job={props.job} />
        </div>
       
      </TabPanel>
      <TabPanel>
        <Interviews id={props.job.id}/>
      </TabPanel>
      <TabPanel>
        <Task id={props.job.id} />
      </TabPanel>
      <TabPanel>
        {/* <NotesForm id={props.id}/> */}
        <Notes id={props.job.id}/>
      </TabPanel>
      <TabPanel>
        {/* <ContactForm id={props.id}/> */}
        <Contact id={props.job.id}/>
      </TabPanel>
    </Tabs>
    </>
  )
}

export default Modal