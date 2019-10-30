import React from 'react'
import styles from './styles'
import { Paper, Grid } from '@material-ui/core'
import { Stats, Spells, Skins } from '../../champion/'

export default function Info (props) {
  const {
    champion,
    spellValue,
    handleChange,
    skinHandleCLick,
    currentSkin,
    skins
  } = props

  const classes = styles()

  return (
    <Paper className={classes.info}>
      <Grid container justify='space-around'>
        <Grid item lg={4} className={classes.imageWrapper}>
          <Skins
            handleCLick={skinHandleCLick}
            currentSkin={currentSkin}
            skins={skins}
            champion={champion}
          />
        </Grid>
        <Grid item lg={7}>
          <Grid container direction='column' className={classes.statsWrapper}>
            <Stats champion={champion} />
            <Spells
              champion={champion}
              value={spellValue}
              handleChange={handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}
