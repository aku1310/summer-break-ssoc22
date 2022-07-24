import React from 'react'

function Landing() {
  return (
    <div id='landing-page' className='page'>
        <div id='Details'>
            <p className='accented' id='landing-title'>Summer Break</p>
            <p>Date: <span className='accented'>August 27, 2022</span></p>
            <p>Join us at: <a href='#' className='accented'>Bennet University, </a></p>
            {/* <applybutton/> */}
        </div>
        <div id='illustration-container'>
          <img src='https://cdn.discordapp.com/attachments/790633998019330148/1000794783381475429/2340666-full-removebg-preview.png' alt='blockchain-illustration'/>
        </div>
    </div>
  )
}

export default Landing