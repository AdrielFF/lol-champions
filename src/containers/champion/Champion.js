import React from 'react'
import { withStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'
import styles from './styles'
import Header from '../../components/header'
import { default as ChampionHeader } from '../../components/champion/header'
import Info from '../../components/champion/info'

class Champion extends React.Component {
  constructor () {
    super()

    this.state = {
      champion: null,
      skins: []
    }
  }

  componentDidMount () {
    const { params } = this.props.match
    fetch(
      `https://ddragon.leagueoflegends.com/cdn/9.20.1/data/en_US/champion/${
        params.id
      }.json`
    )
      .then(res => (res.status === 200 ? res.json() : 'error'))
      .then(({ data }) => {
        if (data !== 'error') {
          this.setState({
            champion: data[params.id],
            skins: data[params.id].skins.map(skin => ({
              title: skin.name !== 'default' ? skin.name : data[params.id].name,
              src: `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${
                params.id
              }_${skin.num}.jpg`
            })),
            currentSkin: 0
          })
        }
      })
  }

  render () {
    const { champion, spellValue, skins } = this.state
    const { classes } = this.props
    return (
      <>
        <Header />
        {champion && (
          <Grid
            container
            justify='center'
            style={{
              backgroundImage: `url('https://lolstatic-a.akamaihd.net/game-info/1.1.9/images/champion/backdrop/bg-${champion.id.toLowerCase()}.jpg`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
            className={classes.championContainer}
          >
            <Grid item sm={9}>
              <ChampionHeader champion={champion} />
              <Info skins={skins} champion={champion} spellValue={spellValue} />
            </Grid>
          </Grid>
        )}
      </>
    )
  }
}

export default withStyles(styles)(Champion)
