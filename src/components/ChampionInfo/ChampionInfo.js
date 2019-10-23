import React from 'react'
import styles from './styles'
import { Paper, Grid } from '@material-ui/core'
import ChampionStats from '../ChampionStats/ChampionStats'

export default function ChampionInfo ({ champion }) {
  const classes = styles()

  return (
    <Paper className={classes.championInfo}>
      <Grid container justify='space-around'>
        <Grid item lg={4} className={classes.imageWrapper}>
          <img
            className={classes.image}
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${
              champion.id
            }_0.jpg`}
            alt=''
          />
        </Grid>
        <Grid item lg={7}>
          <ChampionStats champion={champion} />
        </Grid>
      </Grid>
    </Paper>
  )
}
