import React from 'react'

function Header() {
  return (
    <div id='header'>
        <img src={require('./../images/social-logo.png')} id='ssoc-logo' alt='SSOC Logo'/>
        <p>in collaboration with CodingMinutes</p>
        <img src='' alt='Coding Minutes Logo'/>
    </div>
  )
}

export default Header