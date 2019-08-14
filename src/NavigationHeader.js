import React from 'react'
import styled from 'styled-components'
import favicon from './favicon.ico'
import { includes } from 'lodash'

const Container = styled.div`
    background-color: #000000;
    height: 115px;
    position: fixed;
    width: 100%;
    z-index: 10;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.32);
    justify-content: flex-start;
    display: flex;
`
const ImageContainer = styled.div`
    display: block;
    width: 60px;
    height: 60px;
    background-color: #FFD770;
    text-align: center;
    align-content: center;
    align-items: center;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    display: flex;
    justify-content: center;
    margin-left: 16px;
    margin-right: 16px;
    margin-top: 8px;
`
const Image = styled.img`
    width: 44px;
    vertical-align: middle;
    text-align: center;
`
const HomeLink = styled.a`
    font-size: 24px;
    color: #FFD770;
    underline: none;
    margin-top: 24px;
    &:hover {
        color: #FFD770;
        underline: none;
        text-decoration: none;
}
    }
`
const NavBar = styled.div`
    width: 100%;
    bottom: 0;
    flex: 1;
    position: absolute;
    margin-left: 56px;
`
const NavItem = styled.div`
    margin-left: 8px;
    margin-right: 8px;
    float: left;
    display: block;
    color: #FFD770;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    padding-bottom: 8px;
    border-bottom: ${(props) => props.isActive ? '3px solid #FFD770' : '3px solid transparent'};
    &:hover {
        color: #FFD770;
        underline: none;
        text-decoration: none;
    }
`
const NavItemLink = styled.a`
    margin-left: 8px;
    margin-right: 8px;
    float: left;
    display: block;
    color: #FFD770;
    text-align: center;
    text-decoration: none;
    font-size: 16px;    
    &:hover {
        color: #FFD770;
        underline: none;
        text-decoration: none;
    }
`
const navData = [
    { href: 'Jobs', title: 'Jobs' },
    { href: 'Featured', title: 'Featured Jobs' },
    { href: 'Post', title: 'Post a Job' },
    { href: 'Companies', title: 'Hiring Companies' },
    { href: 'Events', title: 'Events' },
    { href: 'News', title: 'News' },
    { href: 'About', title: 'About Us' },

]

function NavigationHeader (props) {
    const location = window.location.pathname
    return (
        <Container>
            <ImageContainer>
                <Image src={favicon} />
            </ImageContainer>
            <HomeLink href='Jobs'>Objective Talent</HomeLink>
            <NavBar>
            {navData.map(function(data, index) {
                let isActive = false
                if (includes(location, data.href)) {
                    isActive = true
                }
                return (
                    <NavItem key={index} isActive={isActive}><NavItemLink key={index} href={data.href}>{data.title}</NavItemLink></NavItem>
                )
            })}

            </NavBar>
        </Container>
    )
}

export default NavigationHeader
