import React from 'react'

function Landing() {

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div id='landing-page' className='page'>
        <div id='Details'>
            <p className='accented' id='landing-title'>Summer Break</p>
            <p>Date: <span className='accented'>August 27, 2022</span></p>
            <p>Join us at: <a href='#' className='accented'>Bennet University, </a></p>
            <div 
              className='apply-button' 
              data-hackathon-slug="YOUR-HACKATHON-SLUG" 
              data-button-theme="light"
              style={{width: 2 + 'em'}}
            ></div>
        </div>
        <div id='illustration-container'>
          <img src='https://cdn.discordapp.com/attachments/790633998019330148/1000794783381475429/2340666-full-removebg-preview.png' alt='blockchain-illustration'/>
        </div>
    </div>
  )
}

export default Landing