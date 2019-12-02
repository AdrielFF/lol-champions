import React from 'react'
import styles from './styles'
import { Paper, Grid } from '@material-ui/core'
import { Stats, Spells } from '../../champion/'
import Slider from '../../slider'

export default function Info (props) {
  const { champion, skins } = props

  const classes = styles()

  const Skins = () => <Slider items={skins} />

  return (
    <Grid
     item
     container
     xs={11}
     className={classes.infoWrapper}
     direction="column"
     alignItems="center"
    >
      <Paper className={classes.infoPaper}>
        <Grid item className={classes.imageWrapper} xs={11} md={4}>
          <Skins />
        </Grid>
        <Grid item xs={11} md={7}>
          {champion && (
            <Grid item container direction='column' className={classes.statsWrapper} xs={12} >
              <Stats champion={champion} />
              <Spells champion={champion} />
            </Grid>
          )}
        </Grid>
      </Paper>
    </Grid>
  )
}
