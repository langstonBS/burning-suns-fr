import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { responsiveFontSizes } from '@material-ui/core/styles';
import './theme.css';
import { Container } from '@material-ui/core';

const sam = createMuiTheme({
    palette: {
        primary: {
            light: '#d1c4e9',
            main: '#3F51B5',
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
            fontSize: '4em',
            fontWeight: 'bolder',
            textAlign:'center'
        },
        h2: {
            fontFamily: 'Helvetica Neue',
            fontSize: '1em',
        },
        h6: {
            fontFamily: 'Helvetica Neue',
            fontSize: '1em',
        },
        p: {
            fontFamily: 'Helvetica Neue',
            fontSize: '1em',
        },

    }
});
responsiveFontSizes(sam)

// very impressive adaptation of the material ui theme pattern
const useStyles = makeStyles(() => ({
    paper: {
        marginTop: sam.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: sam.spacing(2),
        borderRadius: '20px',
        opacity: '80%',
        backgroundColor: sam.palette.primary.light
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
        opacity: '100%',
        
    },
    header: {
        backgroundColor: sam.palette.primary.dark
    },
    title: {
        fontSize: sam.typography.h1.fontSize
    },
    root: {
        width: '100%',
      },
    heading: {
        fontSize: sam.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: sam.typography.pxToRem(15),
        color: sam.palette.text.secondary,
    },
    form2: {
        width: '100%', // Fix IE 11 issue.v
        marginTop: sam.spacing(3),
    },
    card: {
        display: 'flex',
      },
      cardDetails: {
        flex: 1,
      },
      cardMedia: {
        width: 160,
      },    
    container: {
        backgroundColor: 'white',
        width: '50%',
        border: sam.palette.primary.dark,
        borderRadius: '10px',
        margin: '5em auto',
        paddingBottom: '1em',
        boxShadow: 3
    },
}));

export default useStyles;