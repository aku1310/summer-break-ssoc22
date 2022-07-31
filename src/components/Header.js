import React from 'react'

function Header() {
  return (
    <div id='header'>
        <img src={require('./../images/social-logo.png')} id='ssoc-logo' alt='SSOC Logo'/>
        <img src={require('./../images/codingminutes-logo.png')} id='codemin-logo' alt='Coding Minutes Logo'/>
    </div>
  )
}

export default Header