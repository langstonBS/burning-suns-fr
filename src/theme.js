import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { responsiveFontSizes } from '@material-ui/core/styles';
import './theme.css';



const sam = createMuiTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },

    },

    typography: {
        fontFamily: 'Times New Roman',
        h1: {
            fontFamily: 'Helvetica Neue',
            fontSize: 16,

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
    },
    submit: {
        margin: sam.spacing(3, 0, 2),
        backgroundColor: sam.palette.primary.main,
    },
     
}));







export default useStyles;