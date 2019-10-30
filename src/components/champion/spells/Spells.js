import React from "react"
import styles from "./styles"
import { Grid, Typography, Tabs, Tab, Box } from "@material-ui/core"

export default function ChampionSpells({ champion, value, handleChange }) {
  const classes = styles()

  function TabPanel(props) {
    const { children, index, ...other } = props

    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-prevent-tabpanel-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    )
  }

  return (
    <Grid className={classes.spellsWrapper}>
      <Tabs
        value={value}
        onChange={handleChange}
        classes={{
          indicator: classes.indicator,
          flexContainer: classes.flexContainer,
        }}
      >
        {champion.spells.map((spell, index) => (
          <Tab
            key={spell.id}
            icon={
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/9.21.1/img/spell/${spell.image.full}`}
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
          <TabPanel key={index} index={index}>
            <Typography>{spell.name}</Typography>
            <Typography variant="subtitle2">{spell.description}</Typography>
          </TabPanel>
        ))}
      </div>
    </Grid>
  )
}
