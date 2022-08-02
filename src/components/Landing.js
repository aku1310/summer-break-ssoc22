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
    <div id='landing-page' className='page landing-page'>
        <div id='Details'>
            <p className='accented' id='landing-title'>Summer Break</p><br/><br/>
            <p className='details-landing'>Date: <span className='accented'>August 27, 2022</span></p><br/>
            <p className='details-landing'>Join us at: <span className='accented'>Bennett University, Greater Noida</span> <a href='https://goo.gl/maps/d6YpcNqU8sDLmhSj6' target='_blank' rel='noreferrer'><img src={require('./../images/outside-link')} id='bennet-link-image' alt='outlink'/></a></p><br/><br/><br/>
            <div 
              className='apply-button' 
              data-hackathon-slug="summermeetup" 
              data-button-theme="dark-inverted"
              style={{width: 2 + 'em'}}
            ></div>
        </div>
        <div id='illustration-container'>
          <img id = 'illus'src={require('./../images/blockchain.png')} alt='blockchain-illustration'/>
        </div>
    </div>
  )
}

export default Landing