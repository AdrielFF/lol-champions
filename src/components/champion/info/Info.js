import React from 'react'
import styles from './styles'
import { Paper, Grid } from '@material-ui/core'
import { Stats, Spells } from '../../champion/'
import Slider from '../../slider'

export default function Info (props) {
  const { champion, spellValue, handleChange, skins } = props

  const classes = styles()

  const Skins = () => <Slider items={skins} />

  return (
    <Paper className={classes.info}>
      <Grid container justify='space-around'>
        <Grid item lg={4} className={classes.imageWrapper}>
          <Skins />
        </Grid>
        <Grid item lg={7}>
          <Grid container direction='column' className={classes.statsWrapper}>
            <Stats champion={champion} />
            <Spells champion={champion} />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}
