import React, { Component } from 'react'
import './About.css'
// import { XMasonry, XBlock } from 'react-xmasonry' // Imports JSX plain sources
import { XMasonry, XBlock } from 'react-xmasonry/dist/index.js' // Imports precompiled bundle
import luci from './images/luci2.jpg'
import mahmoud from './images/mahmoudfinalbw.jpg'
import yauheni from './images/yauhenifinal.jpg'
import beryl from './images/berylfinalbw.jpg'

export default class Events extends Component {
  render () {
    return (
      <XMasonry>

        <XBlock>
          <div className='card'>
            <p><center><img src={luci} width='80%' /></center></p>
            <p><center>Lucienne Canet <br /> Sales Lead / Development Support</center></p>
          </div>
        </XBlock>
        <XBlock>
          <div className='card'>
            <p><center><img src={mahmoud} width='80%' /></center></p>
            <p><center>Mahmoud Maamoun<br /> React Lead / Sales Support</center></p>
          </div>
        </XBlock>
        <XBlock>
          <div className='card'>
            <p><center><img src={beryl} width='80%' /></center></p>
            <p><center>Beryl Lee <br />Digital Marketing</center></p>
          </div>
        </XBlock>
        <XBlock>
          <div className='card'>
            <p><center><img src={yauheni} width='80%' /></center></p>
            <p><center>Yauheni Ivaniuk<br /> iOS Lead</center></p>
          </div>
        </XBlock>
        <XBlock >
          <div className='card2' width={10}><h3>Services<br /></h3>
            <h4>Recruitment Events</h4>
            <h4>Job Fairs</h4>
            <h4>Tech Events</h4>
            <h4>Mentorship Matching</h4>
            <h4>Digital Sourcing</h4><br/>
            <h3> Contact Us</h3>
            <h4><i>sales@objectivetalent.com</i></h4>
          </div>
        </XBlock>
      </XMasonry>
    )
  }
}

// <div className='col-sm-6'><iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfFhRzZilBSIqtjoKFO95r4venuVz_dTcfqttww0XoYBNjFtg/viewform?embedded=true" width="640" height="2659" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe></div>
