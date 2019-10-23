import React from 'react'
import { withStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'
import styles from './styles'
import Header from '../../components/Header'
import ChampionHeader from '../../components/ChampionHeader'
import ChampionInfo from '../../components/ChampionInfo'

class Champion extends React.Component {
  constructor () {
    super()

    this.state = {
      champion: null
    }
  }

  componentDidMount () {
    const { params } = this.props.match
    fetch(
      `https://ddragon.leagueoflegends.com/cdn/9.20.1/data/en_US/champion/${
        params.id
      }.json`
    )
      .then(res => res.json())
      .then(({ data }) => {
        this.setState({
          champion: data[params.id]
        })
      })
  }

  render () {
    const { champion } = this.state
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
              <ChampionInfo champion={champion} />
            </Grid>
          </Grid>
        )}
      </>
    )
  }
}

export default withStyles(styles)(Champion)
