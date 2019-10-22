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
      `http://ddragon.leagueoflegends.com/cdn/9.20.1/data/en_US/champion/${
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
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,1)), url('https://lolstatic-a.akamaihd.net/game-info/1.1.9/images/champion/backdrop/bg-" +
                champion.id.toLowerCase() +
                '.jpg',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100%'
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
