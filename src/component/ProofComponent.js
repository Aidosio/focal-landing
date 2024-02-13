import React from 'react';
import {Box, Container, styled, Typography} from "@mui/material";
import Slider from "react-slick";
import focus from '../assets/focus.png'
import company1 from '../assets/logo/company1.png'
import company2 from '../assets/logo/company2.png'
import company3 from '../assets/logo/company3.png'
import company4 from '../assets/logo/company4.png'
import company5 from '../assets/logo/company5.png'
import company6 from '../assets/logo/company6.png'
import company7 from '../assets/logo/company7.png'
import company8 from '../assets/logo/company8.png'


const images = [
    company1,
    company2,
    company3,
    company4,
    company5,
    company6,
    company7,
    company8,
]

const ContainerStyle = styled(Container)`
  padding: 64px 0;
`

const BoxStyle = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 35px;
  padding-left: 44px;
  @media (max-width: 1280px) {
    grid-template-columns: 1fr;
    gap: 64px;
  }
`

const TextGroupStyle = styled(Box)`
  display: flex;
  align-items: center;
  @media (max-width: 1280px) {
    justify-content: center;
    gap: 20px;
  }
`

const ScrollGroupStyle = styled(Box)`
  display: flex;
  align-items: center;
  gap: 80px;
  overflow-x: hidden;
  position: relative;
  
  & img {
    cursor: pointer;
    object-fit: contain;
    height: 30px;
  }
`

const GradientStyle = styled(Box)`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  background: linear-gradient(90.00deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 52.154%, rgb(255, 255, 255) 100%);
`

const SliderStyle = styled(Slider)`
  width: 100%;
`

const BrandsGroupStyle = styled(Box)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 6px 0 6px;

  img {
    position: absolute;
    object-fit: contain;
  }
`

const BrandStyle = styled(Typography)`
  padding: 2px 6px;
  border-radius: 8px;
  background-color: #FE9A86;
  transform: rotate(-10deg);
`

function ProofComponent() {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
    };
    return (
        <ContainerStyle>
            <BoxStyle>
                <TextGroupStyle>
                    <Typography>Trusted by exceptional</Typography>
                    <BrandsGroupStyle>
                        <img src={focus} alt="focus"/>
                        <BrandStyle>brands</BrandStyle>
                    </BrandsGroupStyle>
                    <Typography>around the world</Typography>
                </TextGroupStyle>
                <ScrollGroupStyle>
                    <GradientStyle />
                    <SliderStyle {...settings}>
                        {images.map(item =>
                            <img src={item} alt="company"/>
                        )}
                    </SliderStyle>
                </ScrollGroupStyle>
            </BoxStyle>
        </ContainerStyle>
    );
}

export default ProofComponent;
