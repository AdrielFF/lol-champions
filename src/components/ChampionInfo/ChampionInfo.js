import React from "react"
import styles from "./styles"
import { Paper, Grid } from "@material-ui/core"
import ChampionStats from "../ChampionStats/ChampionStats"
import ChampionSpells from "../ChampionSpells"

export default function ChampionInfo({ champion, value, handleChange }) {
  const classes = styles()

  return (
    <Paper className={classes.championInfo}>
      <Grid container justify="space-around">
        <Grid item lg={4} className={classes.imageWrapper}>
          <img
            className={classes.image}
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
            alt=""
          />
        </Grid>
        <Grid item lg={7}>
          <Grid container direction="column" className={classes.statsWrapper}>
            <ChampionStats champion={champion} />
            <ChampionSpells
              champion={champion}
              value={value}
              handleChange={handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}
