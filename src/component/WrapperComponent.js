import React from 'react';
import {Box, Container, styled, Typography} from "@mui/material";
import wrapper from "../assets/wrapper.png"

const BoxStyle = styled(Box)`
  padding: 96px 0 16px;
  background: linear-gradient(180.00deg, rgb(250 250 249), rgb(41, 37, 36) 100%);
`

const TextGroupStyle = styled(Box)`
  width: max-content;
  @media (max-width: 768px) {
    width: 45%;
  }
  @media (max-width: 425px) {
    width: 45%;
  }
  @media (max-width: 320px) {
    width: min-content;
  }
`

const BoxContentStyle = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 96px 0 64px 48px;
  border-radius: 32px;
  background: rgb(255, 255, 255);
  margin: 16px;
  gap: 85px;
  overflow: hidden;
  @media (max-width: 1280px) {
    grid-template-columns: 1fr;
    padding: 96px 64px;
  }
`

const TagStyle = styled(Typography)`
  font-size: 13px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0.84px;
  text-transform: uppercase;
`

const TitleStyle = styled(Typography)`
  font-size: 60.9px;
  font-weight: 500;
  line-height: 76.8px;
  letter-spacing: -2.56px;
  margin: 16px 0 56px;
`

const UnderTextGroupStyle = styled(Box)`
  display: flex;
  flex-direction: column;
`

const UnderTextStyle = styled(Typography)`
  padding: 24px 0;
  border-bottom: 1px solid #E7E5E4;
  
  :last-child {
    border-bottom: none;
  }
`

function WrapperComponent(props) {
    return (
        <BoxStyle>
            <Container>
                <BoxContentStyle>
                    <TextGroupStyle>
                        <TagStyle color={'primary'}>
                            asset library
                        </TagStyle>
                        <TitleStyle>
                            All your creative <br/> assets, perfectly <br/> organized
                        </TitleStyle>
                        <UnderTextGroupStyle>
                            <UnderTextStyle>
                                Store all ad materials in one central library
                            </UnderTextStyle>
                            <UnderTextStyle>
                                Find assets with AI-powered search and marketing-first metadata filters
                            </UnderTextStyle>
                            <UnderTextStyle>
                                Locate files with your brand specific custom metadata
                            </UnderTextStyle>
                        </UnderTextGroupStyle>
                    </TextGroupStyle>
                    <img src={wrapper} alt="wrapper"/>
                </BoxContentStyle>
            </Container>
        </BoxStyle>
    );
}

export default WrapperComponent;
