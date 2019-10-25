import React from "react"
import styles from "./styles"
import { Container, Grid } from "@material-ui/core"
import ChampionsList from "../../components/ChampionsList"
import { withStyles } from "@material-ui/styles"
import Header from "../../components/Header"
import FilterInput from "../../components/FilterInput"

class Champions extends React.Component {
  constructor() {
    super()

    this.state = {
      champions: [],
      filteredChampions: [],
      searchInputValue: "",
    }
  }

  componentDidMount() {
    fetch(
      "https://ddragon.leagueoflegends.com/cdn/9.20.1/data/en_US/champion.json"
    )
      .then(res => res.json())
      .then(res => {
        this.setState({
          ...this.state,
          champions: Object.values(res.data),
          filteredChampions: Object.values(res.data),
        })
      })
  }

  filterChampions(inputValue) {
    if (inputValue === "juninho") {
      return this.setState({
        ...this.state,
        filteredChampions: this.state.champions.filter(champion =>
          champion.name.toLowerCase().includes("alistar")
        ),
      })
    }

    this.setState({
      ...this.state,
      filteredChampions: this.state.champions.filter(champion =>
        champion.name.toLowerCase().includes(inputValue.toLowerCase())
      ),
    })
  }

  async handleChange({ target }) {
    await this.setState({
      ...this.state,
      searchInputValue: target.value,
    })

    await this.filterChampions(this.state.searchInputValue)
  }

  render() {
    const { classes } = this.props
    return (
      <>
        <Header />
        <Container maxWidth="md" className={classes.championsContainer}>
          <Grid container justify="flex-end">
            <Grid item md={3} className={classes.searchInput}>
              <FilterInput
                value={this.state.searchInputValue}
                handleChange={this.handleChange.bind(this)}
              />
            </Grid>
          </Grid>
          <ChampionsList champions={this.state.filteredChampions} />
        </Container>
      </>
    )
  }
}

export default withStyles(styles)(Champions)
