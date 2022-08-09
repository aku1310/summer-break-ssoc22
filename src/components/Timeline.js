import React from 'react';
import '../App.css';

function Timeline() {
  return (
    <div id='timeline-page' className='timeline page'>
      <div className="timeline-heading">
        <h1 className='title'>Timeline</h1>
      </div>
      <div className="container left">
        <div className="date">
          10:00 AM 
          - 
          11:00 AM
          </div>
        <div className="content">
          <h2>Check in Progress</h2>
          {/* <p>
            Check in Progress
          </p> */}
        </div>
      </div>
      <div className="container right">
        <div className="date">
          11:10 AM 
          - 
          11:30 AM
          </div>
        <div className="content">
          <h2>Welcome</h2>
        </div>
      </div>
      <div className="container left">
        <div className="date">
          11:30 AM 
          - 
          1:00 PM
          </div>
        <div className="content">
          <h2>Mohit Workshop</h2>
        </div>
      </div>
      <div className="container right">
        <div className="date">
          1:00 PM 
          - 
          1:20 PM
          </div>
        <div className="content">
          <h2>Break + Team Formation for Competition</h2>
        </div>
      </div>
      <div className="container left">
        <div className="date">
          1:20 PM 
          - 
          2:00 PM
          </div>
        <div className="content">
          <h2>AMA with Prateek</h2>
        </div>
      </div>
      <div className="container right">
        <div className="date">
          2:00 PM 
          - 
          3:30 PM
          </div>
        <div className="content">
          <h2>Short Competition related to Web3 or Other Current Technology</h2>
        </div>
      </div>
      <div className="container left">
        <div className="date">
          3:30 PM 
          - 
          4:00 PM
          </div>
        <div className="content">
          <h2>Judging + Hangout Session</h2>
        </div>
      </div>
      <div className="container right">
        <div className="date">
          4:00 PM 
          - 
          4:30 PM
          </div>
        <div className="content">
          <h2>Winner Announcement & Distribution of Certificates & Swags</h2>
        </div>
      </div>
    </div>
  )
}

export default Timeline