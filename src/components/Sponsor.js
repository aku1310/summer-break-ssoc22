import React from 'react'

let platinum = [
  {
    name: "Devfolio",
    url: './../images/Devfolio_Logo-Colored.png'
  },
  {
    name: "Polygon",
    url: './../images/Polygon_Logo-Colored.png'
  }
];

let gold = [
  {
    name: "FileCoin",
    url: './../images/Filecoin Coloured White Text.png'
  }
]

function Sponsor() {
  return (
    <div id='sponsor-page' className='page'>
        <h1 className='title'>Sponsors</h1>
        <div className='sponsor-card-container'>
          <h4 className='sponsor-heading'>Platinum Sponsors</h4>
          <section id='platinum-sponsors' className='sponsor-panel'>
            {/* {
              platinum.map(spon => {
                return (
                  <div key={spon.name}>
                    <div className='card'>
                      <h6 className='card-title'>{spon.name}</h6>
                      <img className='card-logo' src={require("spon.url")} alt={spon.name}/>
                    </div>
                  </div>
                )
              })
            } */}

            <div className='card'>
              {/* <h6 className='card-title'>Devfolio</h6> */}
              <a href='https://devfolio.co/' target='_blank'>
                <img className='card-logo' src={require('./../images/Devfolio_Logo-Colored.png')} alt='devfolio-logo'/>
              </a>
            </div>
            
            <div className='card'>
              {/* <h6 className='card-title'>Polygon</h6> */}
              <a href='https://polygon.technology/' target='_blank'>
                <img className='card-logo' src={require('./../images/Polygon_Logo-Colored.png')} alt='polygon-logo'/>
              </a>
            </div>
          </section>
          
          <h4 className='sponsor-heading-gold'>Gold Sponsors</h4>
          <section id='gold-sponsors' className='sponsor-panel'>
            {/* {
              gold.map(spon => {
                return (
                  <div key={spon.name}>
                    <div className='card'>
                      <h6 className='card-title'>{spon.name}</h6>
                      <img className='card-logo' src={require("" + spon.url)} alt={spon.name}/>
                    </div>
                  </div>
                )
              })
            } */}

            <div className='card'>
              {/* <h6 className='card-title'>FileCoin</h6> */}
              <a href='https://filecoin.io/' target='_blank'>
                <img className='card-logo' src={require('./../images/Filecoin Coloured White Text.png')} alt='filecoin-logo'/>
              </a>
            </div>

          </section>
          
          <h4 className='sponsor-heading-SAP'>Study Abroad Partner</h4>
          <section id='sap-sponsors' className='sponsor-panel'>
            <div className='card'>
              <a href='https://www.gradright.com/' target='_blank'>
                <img className='card-logo' src={require('./../images/gradright-logo.png')} alt='GradRight-logo'/>
              </a>
            </div>
          </section>

          <h4 className='sponsor-heading-community'>Community Partner</h4>
          <section id='sap-sponsors' className='sponsor-panel'>
            <div className='card'>
              <a href='https://indianblockchainfraternity.tech/' target='_blank'>
                <img className='card-logo' src={require('./../images/IBF-logo.png')} alt='IBF-logo'/>
              </a>
            </div>
          </section>

        </div>
    </div>
  )
}

export default Sponsor