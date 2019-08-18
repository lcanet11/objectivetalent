import React, { Component } from 'react'
import './styles/Events.css'
// import { Grid, Slug, Fade } from 'mauerwerk'
import { XMasonry, XBlock } from 'react-xmasonry/dist/index.js' // Imports precompiled bundle
import everLastingSky from './images/everlastingsky_2.jpg'
import cochiti from './images/cochiti_1.jpg'
import cloudyKnoxVille from './images/cloudyknoxville_1.jpg'
import peach from './images/peach_1.jpg'
import winterNeva from './images/winterneva_1.jpg'
import heavyfinal from './images/heavyfinal.jpg'
import cochitigm from './images/cochitigm.jpg'
import everlastingcap from './images/everlastingcap.jpg'
import cloudyswitch from './images/cloudyswitch.jpg'
import peachrealestate from './images/peachrealestate.jpg'
import cloudyfuse from './images/cloudyfuse.jpg'
import winterharlem from './images/winterharlem.jpg'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 130px;
`

export default class Events extends Component {
  render () {
    return (
      <Container>
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
              <img src={winterNeva} width='100%' />
              {/*  <h1>Wider card</h1>
              <p>Any text!</p> */}
            </div>
          </XBlock>
          <XBlock width={2}>
            <div className='card'>
              <img src={cochiti} width='100%' />
              {/*  <h1>Simple Card</h1>
              <p>Any text!</p> */}
            </div>
          </XBlock>
          <XBlock width={2}>
            <div className='card'>
              <img src={peach} width='100%' />
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
              <img src={cloudyKnoxVille} width='100%' />
              {/*  <h1>Wider card</h1>
        <p>Any text!</p> */}
            </div>
          </XBlock>
          <XBlock width={2}>
            <div className='card'>
              <img src={everLastingSky} width='100%' />
              {/*  <h1>Wider card</h1>
      <p>Any text!</p> */}
            </div>
          </XBlock>
        </XMasonry>
      </Container>

    )
  }
}
