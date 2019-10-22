import React from 'react'
import styles from './styles'
import { List, ListItem } from '@material-ui/core'

export default function ChampionStats ({ stats }) {
  const classes = styles()

  const getPerLevelStats = regenStats => {
    if (regenStats) return `(+${stats.hpperlevel} per level)`
  }

  return (
    <div className={classes.stats}>
      <List>
        <ListItem>
          Health: {stats.hp}
          {getPerLevelStats(stats.hpperlevel)}
        </ListItem>
        <ListItem>
          Attack Damage: {stats.attackdamage}
          {getPerLevelStats(stats.attackdamageperlevel)}
        </ListItem>
        <ListItem>
          Attack Speed: {stats.attackspeed}
          {getPerLevelStats(stats.attackspeedperlevel)}
        </ListItem>
        <ListItem>
          Movement Speed: {stats.movespeed}
          {getPerLevelStats(stats.mpperlevel)}
        </ListItem>
        <ListItem>
          Health Regen: {stats.hpregen}
          {getPerLevelStats(stats.hpregenperlevel)}
        </ListItem>
        <ListItem>
          Armor: {stats.armor}
          {getPerLevelStats(stats.armorperlevel)}
        </ListItem>
        <ListItem>
          Magic Resist: {stats.spellblock}
          {getPerLevelStats(stats.spellblockperlevel)}
        </ListItem>
      </List>
    </div>
  )
}
