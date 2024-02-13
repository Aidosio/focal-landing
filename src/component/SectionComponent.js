import React from 'react';
import {Box, Button, styled, Typography} from "@mui/material";

const BoxStyle = styled(Box)`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 96px;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  &.row {
    flex-direction: row;
    @media (max-width: 1280px) {
      flex-direction: column-reverse;
    }
  }
  @media (max-width: 1280px) {
    flex-direction: column-reverse;
  }
`

const ImgStyle = styled("img")`
  border-radius: 12px;
  width: 100%;
  object-fit: contain;
  @media (max-width: 1280px) {
    width: 80%;
  }
`

const TextGroupStyle = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const TagStyle = styled(Typography)`
  text-transform: uppercase;
`
const TitleStyle = styled(Typography)`
  font-size: 46px;
  font-weight: 500;
  line-height: 57.6px;
  margin: 16px 0;
  color: #fff
`
const DescriptionStyle = styled(Typography)`
  color: #D6D3D1;
  @media (max-width: 1280px) {
    margin-bottom: 24px;
  }
`

const ButtonStyle = styled(Button)`
  margin: 24px;
`
function SectionComponent({direction, img, tag, title, description, button, color}) {
    return (
        <BoxStyle className={direction}>
            <ImgStyle src={img} alt="image"/>
            <TextGroupStyle>
                <TagStyle color={color}>
                    {tag}
                </TagStyle>
                <TitleStyle dangerouslySetInnerHTML={{__html: title}} />
                <DescriptionStyle>
                    {description}
                </DescriptionStyle>
                {button && <ButtonStyle variant={'contained'}>
                    {button}
                </ButtonStyle>}
            </TextGroupStyle>
        </BoxStyle>
    );
}

export default SectionComponent;
