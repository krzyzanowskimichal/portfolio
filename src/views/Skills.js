import React from 'react';
import styled from 'styled-components'
import MainTemplate from '../templates/MainTemplate'
import { ButtonLink } from '../components/Button/Button';

const StyledWrapper = styled('div')`
letter-spacing: 3px;
`
const StyledParagraph = styled('p')`
line-height: 2rem;
`
const StyledButton = styled(ButtonLink)`
display: inline-block;
margin: 30px 0;
`

const Skills = () => {

    return (
        <MainTemplate name="my skills">
            <StyledWrapper>
                <StyledParagraph>- HTML/CSS (BEM, SASS)</StyledParagraph>
                <StyledParagraph>- Javascript</StyledParagraph>
                <StyledParagraph>- React (Hooks, Redux)</StyledParagraph>
                <StyledParagraph>- Responsive layouts, Material ui</StyledParagraph>
                <StyledParagraph>- Databases basics (MongoDB)</StyledParagraph>
                <StyledParagraph>- back-end basics (Node/Express.js, API)</StyledParagraph>
                <StyledParagraph>- testing basics (jest)</StyledParagraph>
                <StyledParagraph>- wordpress - modules configuration, theming</StyledParagraph>
                <StyledButton href="https://hazdrubal.smallhost.pl/assets/Michal_Krzyzanowski_CV_ENG.pdf" fullyFilled download>download CV</StyledButton>
            </StyledWrapper>
        </MainTemplate>
    )
}

export default Skills