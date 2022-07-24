import React from 'react'

let sponsorList = {
  platinum: [
    {
      name: "Devfolio",
      url: "#"
    },
    {
      name: "Polygon",
      url: "#"
    }
  ],
  gold: [
    {
      name: "FileCoin",
      url: "#"
    }
  ]
}

function Sponsor() {
  return (
    <div id='sponsor-page' className='page'>
        <h1>Sponsors</h1>
        <div className='sponsor-card-container'>
          
        </div>
    </div>
  )
}

export default Sponsor