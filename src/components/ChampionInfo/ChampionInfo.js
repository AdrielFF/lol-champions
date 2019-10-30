import React from 'react'
import styles from './styles'
import { Paper, Grid } from '@material-ui/core'
import ChampionStats from '../ChampionStats/ChampionStats'
import ChampionSpells from '../ChampionSpells'
import ChampionSkins from '../ChampionSkins'

export default function ChampionInfo (props) {
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
    <Paper className={classes.championInfo}>
      <Grid container justify='space-around'>
        <Grid item lg={4} className={classes.imageWrapper}>
          <ChampionSkins
            handleCLick={skinHandleCLick}
            currentSkin={currentSkin}
            skins={skins}
            champion={champion}
          />
        </Grid>
        <Grid item lg={7}>
          <Grid container direction='column' className={classes.statsWrapper}>
            <ChampionStats champion={champion} />
            <ChampionSpells
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
