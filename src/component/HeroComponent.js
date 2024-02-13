import React from 'react';
import {Box, Button, Container, styled, Typography} from "@mui/material";

const ContainerStyle = styled(Container)`
  padding: 96px 0 0 0;
`

const BoxStyle = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const TitleStyle = styled(Typography)`
  font-weight: 500;
  line-height: 100px;
  span {
    background: linear-gradient(-45.00deg, rgb(254, 154, 134),rgb(253, 161, 114),rgb(253, 171, 155),rgb(252, 172, 85));
    -webkit-background-clip:
            text;
    -webkit-text-fill-color:
            transparent;
    background-clip:
            text;
  }
`

const DescriptionTextStyle = styled(Typography)`
  margin: 32px 0;
`

function HeroComponent() {
    return (
        <ContainerStyle maxWidth={'lg'}>
            <BoxStyle>
                <TitleStyle variant={'h1'}>
                    <span>Supercharge</span><br/>
                    your creative pipeline
                </TitleStyle>
                <DescriptionTextStyle>
                    {"Focal is the central hub for your ad creatives."}<br/>{"Manage, proof, and deliver assets 10x faster."}
                </DescriptionTextStyle>
                <Button variant={'contained'}>Request access</Button>
            </BoxStyle>
        </ContainerStyle>
    );
}

export default HeroComponent;
