import React, {useEffect, useState} from 'react';
import {Box, Button, Container, styled, Typography} from "@mui/material";
import logo from '../assets/logo.svg'
import menu from '../assets/menu.svg'

const BoxStyle = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const NavGroupStyle = styled(Box)`
  display: flex;
  flex-direction: row;
`

const NavTypographyStyle = styled(Typography)`
  padding: 16px 24px;
  cursor: pointer;

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`

function HeaderComponent() {
    const [width, setWidth] = useState()
    useEffect(() => {
        setWidth(window.innerWidth)
    }, []);
    return (
        <Container maxWidth="lg">
            <BoxStyle>
                <img style={{cursor: 'pointer'}} src={logo} alt={'logo'}/>
                    {width > 768 ? <NavGroupStyle>
                        <NavTypographyStyle>
                            Features
                        </NavTypographyStyle>
                        <NavTypographyStyle>
                            Use cases
                        </NavTypographyStyle>
                        <NavTypographyStyle>
                            Pricing
                        </NavTypographyStyle>
                    </NavGroupStyle> : <NavTypographyStyle><img src={menu} alt="menu"/></NavTypographyStyle>}
                <Button variant={'contained'}>Request access</Button>
            </BoxStyle>
        </Container>
    );
}

export default HeaderComponent;
