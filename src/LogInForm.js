import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import request from 'superagent';
import { useHistory } from 'react-router-dom';
import './App.css';
import './Header.css';


export default function LogIn(props) {
   //const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory()
  const [ error, setError ] = useState('');
    const reg = /.+\@.+\..+/

    const handelSubmit = async (e) => {
      e.preventDefault()
      if (!reg.test(email)) {
        setError('invaled email');
        return;
      }
        try {
            const data = await request.post(props.url, { email, password })
          props.handleUserChange(data.body.token)
          
            history.push('/SearchPage')
        } catch (e) {
          setError(e.response.body.error)
      }
      
    }
  return (
    <Container component="main" maxWidth="xs">
      <div className='paper'>
        <Avatar className="avatar">
        </Avatar>
        <h2 component="h1" variant="h5">
          {props.title}
        </h2>
        <form className="form" onSubmit={handelSubmit} noValidate>
                  <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      helperText={error}
                    autoComplete="email"
                        autoFocus
                      
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            helperText={error}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant= "contained"
            className="submit"
          >
            {props.title}
          </Button>
          <Grid container>
            <Grid item>
              {props.link}
            </Grid>
          </Grid>
        </form>     
      </div>
    </Container>
  );
}