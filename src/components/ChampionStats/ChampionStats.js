import React from 'react'
import styles from './styles'
import { List, ListItem, ListItemIcon, Grid } from '@material-ui/core'
import Chart from 'react-google-charts'

export default function ChampionStats ({ champion: { stats, info } }) {
  const classes = styles()

  const getPerLevelStats = regenStats => {
    if (regenStats) return `(+${stats.hpperlevel} per level)`
  }

  return (
    <div className={classes.stats}>
      {/* <List>
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
      </List> */}
      <Grid item sm={7}>
        <Chart
          width='100%'
          height={300}
          chartType='BarChart'
          loader={<div>Loading...</div>}
          data={[
            [
              '',
              '',
              { role: 'style' },
              {
                role: 'annotation',
                type: 'string',
                calc: 'stringify'
              }
            ],
            ['Attack', info.attack, '#fb4545', `${info.attack}/10`],
            ['Defense', info.defense, '#299027', `${info.defense}/10`],
            ['Magic', info.magic, '#383ffb', `${info.magic}/10`],
            [
              'Difficulty',
              info.difficulty,
              'color: #8620bd',
              `${info.difficulty}/10`
            ]
          ]}
          options={{
            animation: {
              startup: true,
              easing: 'in',
              duration: 500
            },
            backgroundColor: { fill: 'transparent' },
            legend: { position: 'none' },
            hAxis: {
              gridlines: { color: 'transparent' },
              baselineColor: 'transparent',
              textPosition: 'none'
            },
            vAxis: {
              textStyle: {
                color: '#fff'
              }
            },
            chartArea: {
              width: '100%',
              left: '20%'
            }
          }}
        />
      </Grid>
    </div>
  )
}
