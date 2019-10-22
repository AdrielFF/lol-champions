import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import styles from './styles'

export default function ChampionHeader ({ champion }) {
  const classes = styles()
  return (
    <Grid item sm={11} className={classes.championHeader}>
      <Typography gutterBottom component='h1' variant='h3'>
        {champion.name}
      </Typography>
      <Box fontStyle='italic'>
        <Typography>{champion.title}</Typography>
      </Box>
    </Grid>
  )
}
