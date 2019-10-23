import React from 'react'
import styles from './styles'
import { Paper, Grid } from '@material-ui/core'
import ChampionStats from '../ChampionStats/ChampionStats'

export default function ChampionInfo ({ champion }) {
  const classes = styles()

  return (
    <Paper className={classes.championInfo}>
      <Grid container>
        <Grid item lg={4}>
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${
              champion.id
            }_0.jpg`}
            alt=''
          />
        </Grid>
        <Grid item lg={8}>
          <ChampionStats stats={champion.stats} />
        </Grid>
      </Grid>
    </Paper>
  )
}
