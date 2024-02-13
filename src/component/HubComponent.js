import React from 'react';
import {Box, styled, Typography} from "@mui/material";

const BoxStyle = styled(Box)`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 96px;
  @media (max-width: 1280px) {
    grid-template-columns: 1fr;
  }
`

const BoxLeftStyle = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (max-width: 1280px) {
    align-items: center;
  }
`

const BoxRightStyle = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (max-width: 1280px) {
    align-items: center;
  }
`

const TextGroupStyle = styled(Box)`
  & h3 {
    color: rgb(5, 4, 3);
    font-size: 30.4px;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: -0.96px;
    text-align: left;
    @media (max-width: 1280px) {
      text-align: center;
    }
  }

  & p {
    color: rgb(5, 4, 3);
    font-size: 17px;
    font-weight: 400;
    line-height: 22.5px;
    letter-spacing: 0px;
    text-align: left;
    @media (max-width: 1280px) {
      text-align: center;
    }
  }
`

const ImgStyle = styled('img')`
  width: 100%;
  object-fit: contain;
  @media (max-width: 1280px) {
    width: 60%;
  }
`

function HubComponent({title, description, img}) {
    return (
        <BoxStyle>
            <BoxLeftStyle>
                <TextGroupStyle>
                    <Typography variant={'h3'}>
                        {title[0]}
                    </Typography>
                    <Typography>
                        {description[0]}
                    </Typography>
                </TextGroupStyle>
                <ImgStyle src={img[0]} alt="image"/>
            </BoxLeftStyle>
            <BoxRightStyle>
                <TextGroupStyle>
                    <Typography variant={'h3'}>
                        {title[1]}
                    </Typography>
                    <Typography>
                        {description[1]}
                    </Typography>
                </TextGroupStyle>
                <ImgStyle src={img[1]} alt="image"/>
            </BoxRightStyle>
        </BoxStyle>
    )
}

export default HubComponent;
