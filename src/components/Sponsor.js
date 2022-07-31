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
              <img className='card-logo' src={require('./../images/Devfolio_Logo-Colored.png')} alt='devfolio-logo'/>
            </div>
            
            <div className='card'>
              {/* <h6 className='card-title'>Polygon</h6> */}
              <img className='card-logo' src={require('./../images/Polygon_Logo-Colored.png')} alt='polygon-logo'/>
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
              <img className='card-logo' src={require('./../images/Filecoin Coloured White Text.png')} alt='filecoin-logo'/>
            </div>

          </section>


        </div>
    </div>
  )
}

export default Sponsor