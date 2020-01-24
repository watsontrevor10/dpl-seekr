import React, { useState } from 'react';
import JobViewForm from './JobViewForm';
import Backdrop from './Backdrop';
import Task from './Tasks';
import Interviews from "./Interviews";
import Contacts from "./Contacts";
import Notes from "./Notes";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Modal = (props) => {
  const [tabIndex, setTabIndex] = useState(0)

  return (
    <>
      <Backdrop show={props.show} hide={props.hide} />
      <Tabs className="main-modal-container">
        <TabList className="tab-list">
          <Tab 
            selectedIndex={tabIndex} 
            className="modal-info-icon" 
            onSelect={tabIndex => setTabIndex({ tabIndex })}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              className="modal-svg"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <p>
              Job Info
            </p>
          </Tab>
          <Tab 
            selectedIndex={tabIndex} 
            className="modal-info-icon" 
            onSelect={tabIndex => setTabIndex({ tabIndex })}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              className="modal-svg"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <p>
              Interviews
            </p>
          </Tab>
          <Tab 
            selectedIndex={tabIndex} 
            className="modal-info-icon" 
            onSelect={tabIndex => setTabIndex({ tabIndex })}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              className="modal-svg"
            >
              <line x1="8" y1="6" x2="21" y2="6"></line>
              <line x1="8" y1="12" x2="21" y2="12"></line>
              <line x1="8" y1="18" x2="21" y2="18"></line>
              <line x1="3" y1="6" x2="3.01" y2="6"></line>
              <line x1="3" y1="12" x2="3.01" y2="12"></line>
              <line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>
            <p>
              Tasks
            </p> 
          </Tab>
          <Tab 
            selectedIndex={tabIndex} 
            className="modal-info-icon" 
            onSelect={tabIndex => setTabIndex({ tabIndex })}
          >
            <svg 
              version="1.1" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 32 32" 
              stroke="currentColor"  
              className="modal-svg"
            >
              <path 
                d="M21 4v-1h1v1h1.003c1.107 0 1.997 0.897 1.997 2.004v20.993c0 1.114-0.894 2.004-1.997 2.004h-15.005c-1.107 0-1.997-0.897-1.997-2.004v-20.993c0-1.114 0.894-2.004 1.997-2.004h1.003v-1h1v1h3v-1h1v1h3v-1h1v1h3zM21 5h-3v1h-1v-1h-3v1h-1v-1h-3v1h-1v-1h-1c-0.552 0-1 0.439-1 1.003v20.994c0 0.554 0.455 1.003 1 1.003h15c0.552 0 1-0.439 1-1.003v-20.994c0-0.554-0.455-1.003-1-1.003h-1v1h-1v-1zM9 9v1h13v-1h-13zM9 12v1h13v-1h-13zM9 15v1h13v-1h-13zM9 18v1h13v-1h-13zM9 21v1h13v-1h-13zM9 24v1h13v-1h-13z"
              ></path>
            </svg>
            <p>
              Notes
            </p> 
          </Tab>
          <Tab 
            selectedIndex={tabIndex} 
            className="modal-info-icon" 
            onSelect={tabIndex => setTabIndex({ tabIndex })}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              className="modal-svg"
            >
              <path 
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
              ></path>
            </svg>
            <p>
              Contact
            </p>
          </Tab>
        </TabList>
        <TabPanel className="tab-container">
          <JobViewForm 
            job={props.job} 
            showDelete={props.showDelete} 
            hideDelete={props.hideDelete} 
            delete={props.delete} 
            handleUpdate={props.handleUpdate} 
            deleteModal={props.deleteModal}
          />
        </TabPanel>
        <TabPanel className="tab-container">
          <Interviews id={props.job.id} />
        </TabPanel>
        <TabPanel className="tab-container">
          <Task id={props.job.id} />
        </TabPanel>
        <TabPanel className="tab-container">
          <Notes id={props.job.id} />
        </TabPanel>
        <TabPanel className="tab-container" >
          <Contacts id={props.job.id} />
        </TabPanel>
      </Tabs>
    </>
  )
}

export default Modal