import React from 'react'


function Speaker() {
    return (
        <div id='sponsor-page' className='page'>
            <h1 className='title'>Speakers</h1>
            <div className='sponsor-card-container'>
                <section id='platinum-sponsors' className='sponsor-panel'>

                    <div className='name-speaker'>
                        <div className='card'>
                            <a className='speaker-name' href='https://www.linkedin.com/in/mbcse' target='_blank'>
                                <img className='card-logo' src={require('./../images/speaker-mohit-bhat.jpeg')} alt='devfolio-logo' />
                            </a>
                        </div>
                        <div className='speak'>
                            <div className='speaker-name'>
                                Mohit Bhat
                            </div>
                        </div>
                    </div>

                    <div className='name-speaker'>
                        <div className='card'>
                        <a className='speaker-name' href='https://www.linkedin.com/in/prateeknarang27' target='_blank'>
                            <img className='card-logo' src={require('./../images/speaker-prateek-narang.jpeg')} alt='polygon-logo' />
                        </a>
                        </div>
                        <div className='speak'>
                        </div>
                        <div className='speaker-name'>
                            Prateek Narang
                        </div>
                    </div>
                </section>


            </div>
        </div>
    )
}

export default Speaker