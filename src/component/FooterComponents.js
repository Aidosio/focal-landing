import React from 'react';
import {Box, Container, styled, Typography} from "@mui/material";
import logoLight from '../assets/logo-light.svg'

const nav = [
    {
        title: 'Features',
        link: ['Asset Library', 'Integrations', 'Media Player', 'Pages']
    },
    {
        title: 'Use cases',
        link: ['DTC and eCom', 'Gaming', 'Agencies']
    },
    {
        title: 'Company',
        link: ['About us', 'Blog', 'FAQ', 'Pricing', 'Privacy policy', 'Solutions library']
    },
    {
        title: 'Social',
        link: ['X', 'Linkedin']
    },
]

const BoxContentStyle = styled(Box)`
  background: #FE9A86;
  padding-bottom: 56px;
`

const FooterStyle = styled(Box)`
  border-radius: 48px;
  background: rgb(51, 18, 10);
  padding: 48px;
  color: #fff
`

const BoxNavGroupStyle = styled(Box)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 56px;
  @media (max-width: 1280px) {
    display: flex;
    flex-direction: column;
  }
`

const LogoBlockStyle = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const NavBlockStyle = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 1280px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

const TypographyTitleStyle = styled(Typography)`
  font-size: 15.1px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;
`

const TypographyDeskStyle = styled(Typography)`
  color: #fff;
  font-size: 14.9px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;
`

const TypographyCopyriteStyle = styled(Typography)`
  font-size: 14.9px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
`

const ImgStyle = styled('img')`
  @media (max-width: 1280px) {
    width: 120px;
  }
`

function FooterComponents() {
    return (
        <BoxContentStyle>
            <Container>
                <FooterStyle>
                    <BoxNavGroupStyle>
                        <LogoBlockStyle>
                            <ImgStyle src={logoLight} alt="logo light"/>
                            <Typography>
                                Paasivuorenkatu 4 A, <br/> 00530 Helsinki, Finland.
                            </Typography>
                        </LogoBlockStyle>
                        {nav.map((item, index) =>
                            <NavBlockStyle>
                                {item.title && <TypographyTitleStyle color={'primary'}>
                                    {item.title}
                                </TypographyTitleStyle>}
                                {item.link.map((item, index) =>
                                    <TypographyDeskStyle>
                                        {item}
                                    </TypographyDeskStyle>
                                )}
                            </NavBlockStyle>
                        )}
                    </BoxNavGroupStyle>
                    <TypographyCopyriteStyle color={'primary'}>
                        © 2023 Focal Technologies Oy.
                    </TypographyCopyriteStyle>
                </FooterStyle>
            </Container>
        </BoxContentStyle>
    );
}

export default FooterComponents;
