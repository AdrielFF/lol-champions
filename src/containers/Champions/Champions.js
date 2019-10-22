import React from 'react'
import styles from './styles'
import { Container } from '@material-ui/core'
import ChampionsList from '../../components/ChampionsList'
import { withStyles } from '@material-ui/styles'
import Header from '../../components/Header'

class Champions extends React.Component {
  constructor () {
    super()

    this.state = {
      champions: []
    }
  }

  componentDidMount () {
    fetch(
      'https://ddragon.leagueoflegends.com/cdn/9.20.1/data/en_US/champion.json'
    )
      .then(res => res.json())
      .then(res => {
        this.setState({
          champions: Object.values(res.data)
        })
      })
  }

  render () {
    const {
      classes: { championsContainer }
    } = this.props

    return (
      <>
        <Header />
        <Container maxWidth='md' className={championsContainer}>
          <ChampionsList champions={this.state.champions} />
        </Container>
      </>
    )
  }
}

export default withStyles(styles)(Champions)
