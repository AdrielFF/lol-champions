import React, { useState, useEffect } from "react"
import styles from "./styles"
import { Container, Grid } from "@material-ui/core"
import ChampionsList from "../../components/championsList"
import { withStyles } from "@material-ui/styles"
import FilterInput from "../../components/filterInput"
import DefaultLayout from '../../layouts/defaultLayout/DefaultLayout'

 function Champions(props) {
  const { classes } = props
  const [champions, setChampions] = useState([])
  const [filteredChampions, setFilteredChampions] = useState([])
  const [searchInputValue, setSearchInputValue] = useState('')

  useEffect(() => {
    fetch(
      "https://ddragon.leagueoflegends.com/cdn/9.20.1/data/en_US/champion.json"
    )
      .then(res => res.json())
      .then(res => {
          setChampions(Object.values(res.data))
          setFilteredChampions(Object.values(res.data))
        })
  }, [])

  const filterChampions = (inputValue) => {
    if (inputValue === "juninho") {
      return (
        setFilteredChampions(champions.filter(champion =>
          champion.name.toLowerCase().includes("alistar")))
      )
    }

      setFilteredChampions(champions.filter(champion =>
        champion.name.toLowerCase().includes(inputValue.toLowerCase())))
  }

  const handleChange = async ({ target }) => {
    await setSearchInputValue(target.value)
    await filterChampions(searchInputValue)
  }

  return(
    <DefaultLayout>
      <Container maxWidth="md" className={classes.championsContainer}>
        <Grid container justify="flex-end">
          <Grid item md={3} className={classes.searchInput}>
            <FilterInput
              value={searchInputValue}
              handleChange={handleChange}
            />
          </Grid>
        </Grid>
        <ChampionsList champions={filteredChampions} />
      </Container>
    </DefaultLayout>
  )
}

export default withStyles(styles)(Champions)
