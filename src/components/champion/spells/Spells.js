import React, { useState } from 'react'
import { withStyles } from '@material-ui/styles'
import styles from './styles'
import { Grid, Typography, Tabs, Tab, Box } from '@material-ui/core'

const TabPanel = props => {
  const { children, index, currentValue, ...other } = props

  return (
    <Typography
      component='div'
      role='tabpanel'
      hidden={currentValue !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  )
}

function Spells(props) {
  const { champion, classes } = props
  const[currentSpell, setCurrentSpell] = useState(0)

  const handleChange = (_, nextSpell) => {
      setCurrentSpell(nextSpell)
  }

  const createMarkup =  (markup) => {
    return { __html: markup }
  }

  return (
    <Grid className={classes.spellsWrapper}>
      <Tabs
        value={currentSpell}
        onChange={handleChange}
        classes={{
          indicator: classes.indicator,
          flexContainer: classes.flexContainer
        }}
      >
        {champion.spells.map((spell, index) => (
          <Tab
            key={spell.id}
            icon={
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/9.21.1/img/spell/${
                  spell.image.full
                }`}
                alt={`${spell.name} skill`}
              />
            }
            aria-label={spell.name}
            id={`scrollable-prevent-tabpanel-${index}`}
            disableRipple
            classes={{ root: classes.button }}
          />
        ))}
      </Tabs>
      <div className={classes.spellDescription}>
        {champion.spells.map((spell, index) => (
          <TabPanel
            currentValue={currentSpell}
            key={index}
            index={index}
          >
            <Typography>{spell.name}</Typography>
            <Typography variant='subtitle2'>
              <p
                dangerouslySetInnerHTML={createMarkup(spell.description)}
              />
            </Typography>
          </TabPanel>
        ))}
      </div>
    </Grid>
  )
}

export default withStyles(styles)(Spells)
