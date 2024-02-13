import React from 'react';
import {Box, styled} from "@mui/material";

const BoxStyle = styled(Box)`
  background-color: #FAFAF9;
`

function MainBlockComponents({children}) {
    return (
        <BoxStyle>
            {children}
        </BoxStyle>
    );
}

export default MainBlockComponents;
