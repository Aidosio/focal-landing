import React from 'react';
import {Box, Button, Container, styled, Typography} from "@mui/material";
import cta from '../assets/section_cta-app-wrapper.png'

const BoxContentStyle = styled(Box)`
  background-color: #FE9A86;
  position: relative;
  overflow: hidden;
`

const BoxStyle = styled(Box)`
  height: 80vh;
  display: flex;
  justify-content: center;
  position: relative;
`
const CircleGroupStyle = styled(Box)`
  box-sizing: border-box;
  border: 80px solid rgba(255, 255, 255, 0.48);
  border-radius: 100px;
  position: absolute;
  top: -550px;

  filter: blur(40px);
  background: rgba(255, 0, 0, 0);
  padding: 160px;
`
const CircleWrapperStyle = styled(Box)`
  box-sizing: border-box;
  border: 20px solid rgb(255 255 255);
  border-radius: 100px;

  //filter: blur(24px);
  //background: rgba(255, 255, 255, 0);
  padding: 160px;
`
const CircleCenterStyle = styled(Box)`
  box-sizing: border-box;
  border: 20px solid rgb(255 255 255);
  border-radius: 100px;
  -webkit-filter: blur(16px);
  /* filter: blur(16px); */
  /* background: rgba(255, 255, 255, 0); */
  padding: 160px;
`

const ContainerStyle = styled(Container)`
  position: relative;
`

const BoxTextContentStyle = styled(Box)`
  position: absolute;
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  padding-top: 96px;
`

const TitleStyle = styled(Typography)`
  margin-bottom: 32px;
  text-align: center;
  color: rgb(5, 4, 3);
  font-size: 60.9px;
  font-weight: 500;
  line-height: 76.8px;
  letter-spacing: -2.56px;
  z-index: 1;
`

const DescriptionStyle = styled(Typography)`
  color: #050403;
  font-size: 24px;
  font-weight: 500;
  line-height: 27.5px;
  letter-spacing: -0.28px;
`
const ButtonStyle= styled(Button)`
  margin-top: 46px;
`

const BoxImageStyle = styled(Box)`
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 80%;
  display: flex;
  justify-content: end;
`
const ImageStyle = styled('img')`
  width: 80%;
  object-fit: contain;
  @media (max-width: 1280px) {
    width: 100%;
    position: absolute;
    bottom: -80px;
  }
`

function LastCtaComponents() {
    return (
        <BoxContentStyle>
            <ContainerStyle>
                <BoxTextContentStyle>
                    <TitleStyle variant={'h2'}>Empower your team’s creativity</TitleStyle>
                    <DescriptionStyle>
                        Manage, proof, and deliver marketing assets 10x faster.
                    </DescriptionStyle>
                    <ButtonStyle variant={'contained'} className={'light'} color={'success'}>
                        Request access
                    </ButtonStyle>
                </BoxTextContentStyle>
                <BoxStyle>
                    <CircleGroupStyle>
                        <CircleWrapperStyle>
                            <CircleCenterStyle/>
                        </CircleWrapperStyle>
                    </CircleGroupStyle>
                </BoxStyle>
            </ContainerStyle>
            <BoxImageStyle>
                <ImageStyle src={cta} alt="cta"/>
            </BoxImageStyle>
        </BoxContentStyle>
    );
}

export default LastCtaComponents;
