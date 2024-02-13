import React from 'react';
import {Box, Container, styled, Typography} from "@mui/material";
import SectionComponent from "./SectionComponent";

import focalAppWrapperEditor1 from '../assets/focal-app-wrapper-editor-1.png'
import focalAppWrapperEditor2 from '../assets/focal-app-wrapper-editor-2.png'
import focalAppWrapperEditor3 from '../assets/focal-app-wrapper-editor-3.png'

const data = [
    {
        img: focalAppWrapperEditor1,
        tag: 'comments & activity',
        title: 'Give and receive <br/> actionable feedback',
        description: 'Draw annotations and leave comments',
        color: 'secondary',
        button: ''
    },
    {
        img: focalAppWrapperEditor2,
        tag: 'VERSION HISTORY',
        title: 'Say goodbye to <br/> videoFINALFINAL.mp4',
        description: 'See the asset\'s changelog with one click',
        color: 'error',
        button: ''
    },
    {
        img: focalAppWrapperEditor3,
        tag: 'Media mockups',
        title: 'Context is everything',
        description: 'Experience your creatives in their natural environment',
        color: 'primary',
        button: 'Request access'
    },
]

const BoxStyle = styled(Box)`
  background-color: #292524;
  text-align: center;
  padding: 96px 0;
`
const TitleStyle = styled(Typography)`
  font-weight: 500;
  line-height: 100px;
`
const TipsStyle = styled(Typography)`
  font-size: 14px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0.84px;
  text-transform: uppercase;
`
function SectionGroupComponent() {
    return (
        <BoxStyle>
            <Container>
                <TipsStyle color={'primary'}>
                    media player
                </TipsStyle>
                <TitleStyle variant={'h1'} color={'text.contrastText'}>
                    Collaborate, review<br/>
                    and publish
                </TitleStyle>
                {data.map((item, index) =>
                    <SectionComponent
                        direction={index % 2 === 0 && 'row'}
                        img={item.img}
                        tag={item.tag}
                        title={item.title}
                        description={item.description}
                        button={item.button}
                        color={item.color}
                    />
                )}

            </Container>
        </BoxStyle>
    );
}

export default SectionGroupComponent;
