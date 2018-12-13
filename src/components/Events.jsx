import React, { Component } from 'react'
import './Events.css'
// import { Grid, Slug, Fade } from 'mauerwerk'
import { XMasonry, XBlock } from 'react-xmasonry/dist/index.js' // Imports precompiled bundle
import aquasplash from './images/aquasplash.jpg'
import everlastingsky from './images/everlastingsky.jpg'
import everlastingsky_2 from './images/everlastingsky_2.jpg'
import cochiti from './images/cochiti.jpg'
import cochiti_1 from './images/cochiti_1.jpg'
import mountainrock from './images/mountainrock.jpg'
import cloudyknoxville from './images/cloudyknoxville.jpg'
import cloudyknoxville_1 from './images/cloudyknoxville_1.jpg'
import peach from './images/peach.jpg'
import peach_1 from './images/peach_1.jpg'
import salad from './images/salad.jpg'
import heavyrain from './images/heavyrain.jpg'
import heavyrain_3 from './images/heavyrain_3.jpg'
import relief from './images/relief.jpg'
import strongbliss from './images/strongbliss.jpg'
import greatwhale from './images/greatwhale.jpg'
import eternal from './images/eternal.jpg'
import winterneva from './images/winterneva.jpg'
import winterneva_1 from './images/winterneva_1.jpg'
import desert from './images/desert.jpg'
import heavyfinal from './images/heavyfinal.jpg'
import cochitigm from './images/cochitigm.jpg'
import everlastingcap from './images/everlastingcap.jpg'
import cloudyswitch from './images/cloudyswitch.jpg'
import peachrealestate from './images/peachrealestate.jpg'
import cloudyfuse from './images/cloudyfuse.jpg'
import winterharlem from './images/winterharlem.jpg'

export default class Events extends Component {
  render () {
    return (
      <XMasonry>
        <XBlock>
          <div className='card'>
            <img src={cochitigm} width='100%' />
            {/*  <h1>Simple Card</h1>
            <p>Any text!</p> */}
          </div>
        </XBlock>
        <XBlock>
          <div className='card'>
            <img src={cloudyswitch} width='100%' />
            {/*  <h1>Simple Card</h1>
            <p>Any text!</p> */}
          </div>
        </XBlock>
        <XBlock width={2}>
          <div className='card'>
            <img src={winterneva_1} width='100%' />
            {/*  <h1>Wider card</h1>
            <p>Any text!</p> */}
          </div>
        </XBlock>
        <XBlock width={2}>
          <div className='card'>
            <img src={cochiti_1} width='100%' />
            {/*  <h1>Simple Card</h1>
            <p>Any text!</p> */}
          </div>
        </XBlock>
        <XBlock width={2}>
          <div className='card'>
            <img src={peach_1} width='100%' />
            {/*  <h1>Wider card</h1>
            <p>Any text!</p> */}
          </div>
        </XBlock>
        <XBlock>
          <div className='card'>
            <img src={cloudyfuse} width='100%' />
            {/*  <h1>Simple Card</h1>
            <p>Any text!</p> */}
          </div>
        </XBlock>
        <XBlock>
          <div className='card'>
            <img src={peachrealestate} width='100%' />
            {/*  <h1>Simple Card</h1>
            <p>Any text!</p> */}
          </div>
        </XBlock>
        <XBlock>
          <div className='card'>
            <img src={winterharlem} width='100%' />
            {/*  <h1>Simple Card</h1>
            <p>Any text!</p> */}
          </div>
        </XBlock>
        <XBlock>
          <div className='card'>
            <img src={everlastingcap} width='100%' />
            {/*  <h1>Simple Card</h1>
            <p>Any text!</p> */}
          </div>
        </XBlock>
        <XBlock width={2}>
          <div className='card'>
            <img src={heavyfinal} width='100%' />
            {/*  <h1>Wider card</h1>
        <p>Any text!</p> */}
          </div>
        </XBlock>
        <XBlock width={2}>
          <div className='card'>
            <img src={cloudyknoxville_1} width='100%' />
            {/*  <h1>Wider card</h1>
      <p>Any text!</p> */}
          </div>
        </XBlock>
        <XBlock width={2}>
          <div className='card'>
            <img src={everlastingsky_2} width='100%' />
            {/*  <h1>Wider card</h1>
    <p>Any text!</p> */}
          </div>
        </XBlock>
      </XMasonry>

    )
  }
}
