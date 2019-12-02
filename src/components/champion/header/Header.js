import React from 'react'
import { Box, Grid, Typography, Paper } from '@material-ui/core'
import styles from './styles'

export default function Header ({ champion }) {
  const classes = styles()
  return (
    <Grid item xs={11} className={classes.header}>
      <Paper className={classes.paper}>
        <Typography gutterBottom component='h1' variant='h4'>
          {champion.name}
        </Typography>
        <Box fontStyle='italic'>
          <Typography>{champion.title}</Typography>
        </Box>
      </Paper>
    </Grid>
  )
}
