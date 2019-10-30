import React from 'react'
import styles from './styles'
import { Typography } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos'

export default function (props) {
  const { currentSkin, skins, handleCLick, champion } = props
  const classes = styles()

  const getChampionName = () =>
    skins[currentSkin].name === 'default'
      ? champion.name
      : skins[currentSkin].name

  return (
    <div className={classes.carouselWrapper}>
      <span
        className={classes.carouselBackArrow}
        onClick={() => handleCLick('back')}
      >
        <ArrowBackIosIcon />
      </span>
      <img src={skins[currentSkin].src} alt='' />
      <span
        className={classes.carouselFowardArrow}
        onClick={() => handleCLick('foward')}
      >
        <ArrowForwardIos />
      </span>
      <div className={classes.skinNameWrapper}>
        <Typography>{getChampionName()}</Typography>
      </div>
    </div>
  )
}
