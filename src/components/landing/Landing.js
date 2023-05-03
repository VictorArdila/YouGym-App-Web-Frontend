import React from 'react'
import {LandingContainer} from './LandingStyles';
import {landing} from "../../assets/Resources";

const Landing = () => {
  return (
    <LandingContainer style={{backgroundImage: `url(${landing})`}}>

    </LandingContainer>
  )
}

export default Landing