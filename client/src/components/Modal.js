import React from 'react';
import JobViewForm from './JobViewForm';
import Backdrop from './Backdrop';
import Task from './Tasks';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Modal = (props) => {
  
  return (
    <>
    <Backdrop show={props.show} hide={props.hide} />
    <Tabs className="main-modal-container">
      <TabList>
        <Tab>Job Info</Tab>
        <Tab>Tasks</Tab>
        <Tab>Notes</Tab>
        <Tab>Contact</Tab>
      </TabList>
      <TabPanel>
        <div 
          style={{
            transform: props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: props.show ? "1" : "0"
          }}
        >
          <JobViewForm id={props.id} editJob={props.editJob}/>
        </div>
       
      </TabPanel>
      <TabPanel>
        <Task id={props.id} />
      </TabPanel>
      <TabPanel>
        <h1>Notes</h1>
      </TabPanel>
      <TabPanel>
        <h1>Contact</h1>
      </TabPanel>
    </Tabs>
    </>
  )
}

export default Modal