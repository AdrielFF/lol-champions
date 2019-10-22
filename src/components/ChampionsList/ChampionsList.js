import React from 'react'
import styles from './styles'
import { Link } from 'react-router-dom'

import { Grid, Paper, Typography } from '@material-ui/core'

export default function ChampionsList (props) {
  const { champions } = props
  const classes = styles()

  return (
    <Grid container justify='center'>
      {champions.map(champion => (
        <Link key={champion.key} to={`/champion/${champion.id}`}>
          <Paper className={classes.paper}>
            <img
              height='80'
              width='80'
              alt={champion.name}
              src={`http://ddragon.leagueoflegends.com/cdn/9.20.1/img/champion/${
                champion.image.full
              }`}
            />
            <Typography className={classes.typography} variant='body2'>
              {champion.name}
            </Typography>
          </Paper>
        </Link>
      ))}
    </Grid>
  )
}
