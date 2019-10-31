import React, { Component } from 'react'
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

class Spells extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentSpell: 0
    }
  }

  handleChange = (_, nextSpell) => {
    this.setState({
      ...this.state,
      currentSpell: nextSpell
    })
  }

  createMarkup (markup) {
    return { __html: markup }
  }

  render () {
    const { champion, classes } = this.props

    return (
      <Grid className={classes.spellsWrapper}>
        <Tabs
          value={this.state.currentSpell}
          onChange={this.handleChange}
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
                  src={`http://ddragon.leagueoflegends.com/cdn/9.21.1/img/spell/${
                    spell.image.full
                  }`}
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
              currentValue={this.state.currentSpell}
              key={index}
              index={index}
            >
              <Typography>{spell.name}</Typography>
              <Typography variant='subtitle2'>
                {console.log(spell.resource)}
                <p
                  dangerouslySetInnerHTML={this.createMarkup(spell.description)}
                />
              </Typography>
            </TabPanel>
          ))}
        </div>
      </Grid>
    )
  }
}

export default withStyles(styles)(Spells)

// str= "-asd1231231-123123"
// let validValue = str.match(/^[\d|-]|\d/g).join("")
// let valueMasked = validValue.replace(/(\d{2})(\d{0,})/, '$1.$2')
