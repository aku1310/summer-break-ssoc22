import React from 'react'

let sponsorList = [{
  platinum: [
    {
      name: "Devfolio",
      url: "#"
    },
    {
      name: "Polygon",
      url: "#"
    }
  ]},
  {
  gold: [
    {
      name: "FileCoin",
      url: "#"
    }
  ]}
]

function Sponsor() {
  return (
    <div id='sponsor-page' className='page'>
        <h1 className='title'>Sponsors</h1>
        <div className='sponsor-card-container'>
          <h4>Platinum Sponsors</h4>
          <section id='platinum-sponsors'>
            <div className='card'>
              <h6>Devfolio</h6>
              <img src='#' alt='devfolio-logo'/>
            </div>
            <div className='card'>
              <h6>Polygon</h6>
              <img src='#' alt='polygon-logo'/>
            </div>
          </section>
          
          <h4>Gold Sponsors</h4>
          <section id='gold-sponsors'>
            <div className='card'>
              <h6>FileCoin</h6>
              <img src='#' alt='filecoin-logo'/>
            </div>
          </section>
        </div>
    </div>
  )
}

export default Sponsor