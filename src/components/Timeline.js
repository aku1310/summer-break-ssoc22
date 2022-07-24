import React from 'react';
import '../App.css';

function Timeline() {
  return (
    <div id='timeline-page' className='timeline page'>
      <div className="timeline-heading">
        <h1>Timeline</h1>
      </div>
      <div className="container left">
        <div className="date">Date</div>
        <div className="content">
          <h2>Heading</h2>
          <p>
            Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
          </p>
        </div>
      </div>
      <div className="container right">
        <div className="date">Date</div>
        <div className="content">
          <h2>Heading</h2>
          <p>
            Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
          </p>
        </div>
      </div>
      <div className="container left">
        <div className="date">Date</div>
        <div className="content">
          <h2>Heading</h2>
          <p>
            Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
          </p>
        </div>
      </div>
      <div className="container right">
        <div className="date">Date</div>
        <div className="content">
          <h2>Heading</h2>
          <p>
            Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Timeline