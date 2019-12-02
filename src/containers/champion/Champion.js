import React, { useState, useEffect } from 'react'
import { withStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'
import styles from './styles'
import { default as ChampionHeader } from '../../components/champion/header'
import Info from '../../components/champion/info'
import DefaultLayout from "../../layouts/defaultLayout/DefaultLayout";

function Champion(props) {
  const { classes } = props

  const [champion, setChampion] = useState(null)
  const [skins, setSkins] = useState([])

  useEffect(() =>{
    const { params } = props.match
    fetch(
      `https://ddragon.leagueoflegends.com/cdn/9.20.1/data/en_US/champion/${
        params.id
      }.json`
    )
      .then(res => (res.status === 200 ? res.json() : 'error'))
      .then(({ data }) => {
        if (data !== 'error') {
          setChampion(data[params.id])
          setSkins(data[params.id].skins.map(skin => ({
            title: skin.name !== 'default' ? skin.name : data[params.id].name,
            src: `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${
              params.id
            }_${skin.num}.jpg`
          })))
        }
      })
  }, [props.match])

  return (
    <>
      <DefaultLayout>
        {champion && (
          <Grid
            container
            itemxs={12}
            justify='center'
            style={{
              backgroundImage: `url('https://lolstatic-a.akamaihd.net/game-info/1.1.9/images/champion/backdrop/bg-${champion.id.toLowerCase()}.jpg`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
            className={classes.championContainer}
          >
            <Grid item xs={12}>
              <ChampionHeader champion={champion} />
              <Info skins={skins} champion={champion} />
            </Grid>
          </Grid>
        )}
      </DefaultLayout>
    </>
  )
}

export default withStyles(styles)(Champion)
