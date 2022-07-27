import React from 'react'

let platinum = [
  {
    name: "Devfolio",
    url: "#"
  },
  {
    name: "Polygon",
    url: "#"
  }
];

let gold = [
  {
    name: "FileCoin",
    url: "#"
  }
]

function Sponsor() {
  return (
    <div id='sponsor-page' className='page'>
        <h1 className='title'>Sponsors</h1>
        <div className='sponsor-card-container'>
          <h4>Platinum Sponsors</h4>
          <section id='platinum-sponsors' className='sponsor-panel'>
            {
              platinum.map(spon => {
                return (
                  <div key={spon.name}>
                    <div className='card'>
                      <h6 className='card-title'>{spon.name}</h6>
                      <img className='card-logo' src={spon.url} alt={spon.name}/>
                  </div>
                  </div>
                )
              })
            }
          </section>
          
          <h4>Gold Sponsors</h4>
          <section id='gold-sponsors' className='sponsor-panel'>
            {
              gold.map(spon => {
                return (
                  <div key={spon.name}>
                    <div className='card'>
                      <h6 className='card-title'>{spon.name}</h6>
                      <img className='card-logo' src={spon.url} alt={spon.name}/>
                  </div>
                  </div>
                )
              })
            }
          </section>


        </div>
    </div>
  )
}

export default Sponsor