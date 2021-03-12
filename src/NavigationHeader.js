import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import favicon from './favicon.ico'
import { includes } from 'lodash'
import HamburgerBar from './Components/Icons/HamburgerBar'
import useWindowDimensions from './Helpers/windowSizeHelper'

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
    @media only screen and (min-width: 325px) and (max-width: 959px){
        height: ${(props) => props.displayDropdown ? '340px' : '115px'};
    }
`
const IconContainer = styled.button`
    flex: 1;
    margin: 8px 16px;
    z-index: 14;
    background-color: transparent;
    border: none;
    height: auto;
    position: absolute;
    :focus {
        border: none;
        outline: none;
    }
`
const LogoContainer = styled.div`
    display: flex;
    @media only screen and (min-width: 325px) and (max-width: 959px){
        display: flex;
        flex: 1;
        justify-content: center;
    }
`
const ImageContainer = styled.div`
    display: block;
    width: 60px;
    height: 60px;
    background-color: #000000;
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
    color: #FFE73B;
    underline: none;
    margin-top: 24px;
    &:hover {
        color: #FFE73B;
        underline: none;
        text-decoration: none;
    }
`
const NavBar = styled.div`
    width: 100%;
    bottom: 0;
    flex: 1;
    position: absolute;
    margin-left: 56px;
    display: flex;
    flex-direction: row;
    @media only screen and (min-width: 325px) and (max-width: 959px) {
        flex-direction: column;
        top: 0;
        align-items: center;
        justify-content: center;
        margin-left: 0;
        margin-top: 60px;
    }
`
const NavItem = styled.div`
    margin-left: 8px;
    margin-right: 8px;
    float: left;
    display: block;
    color: #FFE73B;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    padding-bottom: 8px;
    border-bottom: ${(props) => props.isActive ? '3px solid #FFE73B' : '3px solid transparent'};
    &:hover {
        color: #FFE73B;
        underline: none;
        text-decoration: none;
    }
    @media only screen and (min-width: 325px) and (max-width: 959px) {
        margin-bottom: 8px;
        padding-bottom: 2px;
        border-bottom: ${(props) => props.isActive ? '2px solid #FFE73B' : '2px solid transparent'};
    }
`
const NavItemLink = styled.a`
    margin-left: 8px;
    margin-right: 8px;
    float: left;
    display: block;
    color: #FFE73B;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    &:hover {
        color: #FFE73B;
        underline: none;
        text-decoration: none;
    }
`
const navData = [
    { href: 'Jobs', title: 'Jobs' },
  //  { href: 'Featured', title: 'Featured Jobs' },
  //  { href: 'Post', title: 'Post a Job' },
    { href: 'Companies', title: 'Hiring Companies' },
    { href: 'Events', title: 'Events' },
    { href: 'Candidates', title: 'Candidates' },
    { href: 'News', title: 'News' },
    { href: 'About', title: 'About Us' }
]

function NavigationHeader () {
    const [displayDropdown, setDisplayDropdown] = useState(false)
    const { width } = useWindowDimensions()
    const onClickHamburgerBar = () => {
        setDisplayDropdown(!displayDropdown)
    }
    const showHamburgerBar = width <= 959 ? <IconContainer onClick={onClickHamburgerBar}><HamburgerBar /></IconContainer> : null
    const location = window.location.pathname

    let showNavBar
    if (displayDropdown || width >= 959) {
        showNavBar = (
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
        )
    }

    const showLogo =
            <LogoContainer>
                <ImageContainer>
                    <Image src={favicon} />
                </ImageContainer>
                <HomeLink href='Jobs'>Objective Talent</HomeLink>
            </LogoContainer>

    return (
        <Container displayDropdown={displayDropdown}>
            {showHamburgerBar}
            {showLogo}
            {showNavBar}
        </Container>
    )
}

export default NavigationHeader
