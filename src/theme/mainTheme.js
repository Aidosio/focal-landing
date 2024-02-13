import {createTheme} from "@mui/material";


const primary = {
    main: '#FE9A86',
    dark: '#FF7559FF'
};

const error = {
    main: '#67E8F9',
}

const secondary = {
    main: '#FCD34D',
}

const success = {
    main: '#33120A'
}

const text = {
    main: '#050403',
    light: '#292524',
    contrastText: '#fff',
};
export const mainTheme = createTheme({
    palette: {
        primary: primary,
        secondary: secondary,
        success: success,
        text: text,
        error: error,
    },
    typography: {
        fontFamily: [
            "'Inter', sans-serif"
        ].join(','),
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1024,
            lg: 1440,
            xl: 1536,
        },
    },
    spacing: [0, 8, 16, 32, 64, 128],
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: text.main,
                    borderRadius: 12,
                    boxShadow: 'none',
                    textTransform: 'none',
                    padding: '4px 16px',
                    height: 'max-content',
                    fontSize: 16,
                    fontWeight: 400,
                    '&:hover': {
                        boxShadow: 'none',
                    },
                    '&.light': {
                          color: '#fff'
                    }
                },
            },
        },
    },
});
