import React from 'react'
import styles from './styles'
import {
  List,
  ListItem,
  Grid,
  CircularProgress,
  Typography
} from '@material-ui/core'
import Chart from 'react-google-charts'

export default function Stats ({ champion: { stats, info } }) {
  const classes = styles()

  const getPerLevelStats = regenStats => {
    if (regenStats) return `(+${stats.hpperlevel} per level)`
  }

  return (
    <Grid container className={classes.stats}>
      <Grid item xs={11} className={classes.chart}>
        <Chart
          width='100%'
          height={300}
          chartType='BarChart'
          loader={<CircularProgress className={classes.loader} />}
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
            },
            tooltip: {
              trigger: 'none'
            }
          }}
        />
      </Grid>
      <Grid container justify="center">
        <Grid item md={5}>
          <List>
            <ListItem>
              <Typography variant='subtitle2'>
                Health: {stats.hp}
                {getPerLevelStats(stats.hpperlevel)}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant='subtitle2'>
                Attack Damage: {stats.attackdamage}
                {getPerLevelStats(stats.attackdamageperlevel)}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant='subtitle2'>
                Attack Speed: {stats.attackspeed}
                {getPerLevelStats(stats.attackspeedperlevel)}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant='subtitle2'>
                Movement Speed: {stats.movespeed}
                {getPerLevelStats(stats.mpperlevel)}
              </Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={5}>
          <List>
            <ListItem>
              <Typography variant='subtitle2'>
                Health Regen: {stats.hpregen}
                {getPerLevelStats(stats.hpregenperlevel)}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant='subtitle2'>
                Armor: {stats.armor}
                {getPerLevelStats(stats.armorperlevel)}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant='subtitle2'>
                Magic Resist: {stats.spellblock}
                {getPerLevelStats(stats.spellblockperlevel)}
              </Typography>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Grid>
  )
}
