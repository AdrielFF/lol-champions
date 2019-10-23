import React from 'react'
import { Box, Grid, Typography, Paper } from '@material-ui/core'
import styles from './styles'

export default function ChampionHeader ({ champion }) {
  const classes = styles()
  return (
    <Grid item sm={11} className={classes.championHeader}>
      <Paper className={classes.paper}>
        <Typography gutterBottom component='h1' variant='h3'>
          {champion.name}
        </Typography>
        <Box fontStyle='italic'>
          <Typography>{champion.title}</Typography>
        </Box>
      </Paper>
    </Grid>
  )
}
