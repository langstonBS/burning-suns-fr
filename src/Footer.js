import React from 'react'

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

export default function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="/aboutUs">
          Burning Suns
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    )
}