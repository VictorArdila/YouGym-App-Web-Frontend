import React from 'react'
import {DasboardContainer, GridContainer, SectionOne, SectionTwo} from './DashBoardStyles';
function DashBoard() {
  return (
    <DasboardContainer>
        <GridContainer>
            <SectionOne>
                <h3>Section One</h3>
            </SectionOne>
            <SectionTwo>
                <h3>Section Two</h3>
            </SectionTwo>
        </GridContainer>
    </DasboardContainer>
  )
}

export default DashBoard