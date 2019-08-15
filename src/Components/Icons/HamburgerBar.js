
import React from 'react'
import styled from 'styled-components'

const Bar = styled.div`
    width: 35px;
    height: 5px;
    background-color: #FFD770;
    margin: 6px 0;
`
const HamburgerBar = () => {
    return (
        <div>
            <Bar />
            <Bar />
            <Bar />
        </div>
    )
}

export default HamburgerBar
