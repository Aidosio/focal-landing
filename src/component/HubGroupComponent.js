import React from 'react';
import {Box, Container, styled, Typography} from "@mui/material";

import hub1 from '../assets/hub/hub1.png'
import hub2 from '../assets/hub/hub2.png'
import hub3 from '../assets/hub/hub3.png'
import hub4 from '../assets/hub/hub4.png'
import hub5 from '../assets/hub/hub5.png'
import hub6 from '../assets/hub/hub6.png'
import HubComponent from "./HubComponent";

const images = [
    {title: ['Home for all campaigns and files', 'Safe and easy sharing'], description: ['AI Search, custom tags, and filters ensure easy material discovery.', 'Invite your team, agencies and freelancers with just few clicks.'], img: [hub1, hub2]},
    {title: ['Bring your stack with you', 'Command + K'], description: ['Integrate smoothly with Figma, Slack and Google Drive to eliminate copy-paste.', 'Navigate across projects and assets with the speed of light.'], img: [hub3, hub4]},
    {title: ['Customizable by nature', 'Secure'], description: ['No-code flexibility allows everyone to bring their work to one space.', 'We’re SOC 2 certified and have a strong commitment for security.'], img: [hub5, hub6]},
]

const BoxStyle = styled(Box)`
  padding: 96px 0;
  display: flex;
  flex-direction: column;
  gap: 96px;
`

const TitleStyle = styled(Typography)`
  margin-bottom: 32px;
  text-align: center;
  color: rgb(5, 4, 3);
  font-size: 60.9px;
  font-weight: 500;
  line-height: 76.8px;
  letter-spacing: -2.56px;
`

function HubGroupComponent() {
    return (
        <Container>
            <BoxStyle>
                <TitleStyle variant={'h2'}>One central hub for your <br/> assets and team</TitleStyle>
                {images.map(item =>
                    <HubComponent img={item.img} description={item.description} title={item.title}/>
                )}
            </BoxStyle>
        </Container>
    );
}

export default HubGroupComponent;
