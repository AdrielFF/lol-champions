import React from "react"
import { withStyles } from "@material-ui/styles"
import { Grid } from "@material-ui/core"
import styles from "./styles"
import Header from "../../components/header"
import { default as ChampionHeader } from "../../components/champion/header"
import Info from "../../components/champion/info"

class Champion extends React.Component {
  constructor() {
    super()

    this.state = {
      champion: null,
      spellValue: 0,
      currentSkin: 0,
      skins: [],
    }
  }

  componentDidMount() {
    const { params } = this.props.match
    fetch(
      `https://ddragon.leagueoflegends.com/cdn/9.20.1/data/en_US/champion/${params.id}.json`
    )
      .then(res => (res.status === 200 ? res.json() : "error"))
      .then(({ data }) => {
        if (data !== "error") {
          this.setState({
            champion: data[params.id],
            skins: data[params.id].skins.map(skin => ({
              name: skin.name,
              src: `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${params.id}_${skin.num}.jpg`,
            })),
            currentSkin: 0,
          })
        }
      })
  }

  skinHandleCLick(nextSKin) {
    console.log(this.state.currentSkin)
    const { currentSkin, skins } = this.state
    if (nextSKin === "foward") {
      if (currentSkin === skins.length - 1) {
        return this.setState({
          currentSkin: 0,
        })
      }

      this.setState({
        currentSkin: this.state.currentSkin + 1,
      })
    } else {
      if (currentSkin === 0) {
        return this.setState({
          currentSkin: skins.length - 1,
        })
      }
      this.setState({
        currentSkin: this.state.currentSkin - 1,
      })
    }
    console.log(this.state.currentSkin)
  }

  handleChange(_, newValue) {
    this.setState({
      ...this.state,
      spellValue: newValue,
    })
  }

  render() {
    const { champion, spellValue, skinValue, skins, currentSkin } = this.state
    const { classes } = this.props
    return (
      <>
        <Header />
        {champion && (
          <Grid
            container
            justify="center"
            style={{
              backgroundImage: `url('https://lolstatic-a.akamaihd.net/game-info/1.1.9/images/champion/backdrop/bg-${champion.id.toLowerCase()}.jpg`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className={classes.championContainer}
          >
            <Grid item sm={9}>
              <ChampionHeader champion={champion} />
              <Info
                currentSkin={currentSkin}
                skins={skins}
                champion={champion}
                spellValue={spellValue}
                skinValue={skinValue}
                handleChange={this.handleChange.bind(this)}
                skinHandleCLick={this.skinHandleCLick.bind(this)}
              />
            </Grid>
          </Grid>
        )}
      </>
    )
  }
}

export default withStyles(styles)(Champion)
