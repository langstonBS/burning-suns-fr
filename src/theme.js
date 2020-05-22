import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { responsiveFontSizes } from '@material-ui/core/styles';
import './theme.css';
import { Container } from '@material-ui/core';

const sam = createMuiTheme({
    palette: {
        primary: {
            light: '#d1c4e9',
            main: '#fff8e1',
            dark: '#4527a0',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#ffa000',
        },
    },

    typography: {
        fontFamily: 'Times New Roman',

        h1: {
            fontFamily: 'Helvetica Neue',
            fontSize: '3.5em',
        },
        h2: {
            fontFamily: 'Helvetica Neue',
            fontSize: '2em',
        },
        p: {
            fontFamily: 'Helvetica Neue',
            fontSize: '1em',
        },
        Container:
        {

        }

    }
});
responsiveFontSizes(sam)
const useStyles = makeStyles(() => ({
    paper: {
        marginTop: sam.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: sam.spacing(1),
        backgroundColor: sam.palette.primary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: sam.spacing(1),
        backgroundColor: sam.palette.primary.light
        
    },
    submit: {
        margin: sam.spacing(3, 0, 2),
        backgroundColor: sam.palette.primary.main,
        
    },
    header: {
        backgroundColor: sam.palette.primary.dark
    },
    title: {
        fontSize: sam.typography.h1.fontSize
    },
    cardItem: {
        backgroundColor: sam.palette.primary.ligh

    }
}));

export default useStyles;