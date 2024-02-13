import React from 'react';
import {Box, Container, styled} from "@mui/material";
import play from '../assets/play.svg'
import embedContainer from '../assets/embed-container.png'

const BoxStyle = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 54px;
`

const PlayStyle = styled('img')`
    position: absolute;
`
const EmbedContainerStyle = styled('img')`
  width: 100%;
  object-fit: contain;
`
function SectionEmbedComponent() {
    return (
        <Container maxWidth={'lg'}>
            <BoxStyle>
                <PlayStyle src={play} alt="play"/>
                <EmbedContainerStyle src={embedContainer} alt="embed-container"/>
            </BoxStyle>
        </Container>
    );
}

export default SectionEmbedComponent;
