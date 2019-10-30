import React from "react"
import styles from "./styles"
import { Typography } from "@material-ui/core"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos"

export default function(props) {
  const { currentSkin, skins, handleCLick, champion } = props
  const classes = styles()

  const getActiveSkin = index => {
    return index === currentSkin ? classes.skinActive : ""
  }

  const Skin = ({ skin, name, index }) => {
    return (
      <div className={`${classes.skinWrapper} ${getActiveSkin(index)}`}>
        <img src={skin.src} alt="" />
        <div className={classes.skinNameWrapper}>
          <Typography>{name}</Typography>
        </div>
      </div>
    )
  }

  const getChampionName = () =>
    skins[currentSkin].name === "default"
      ? champion.name
      : skins[currentSkin].name

  return (
    <div className={classes.carouselWrapper}>
      <span
        className={classes.carouselBackArrow}
        onClick={() => handleCLick("back")}
      >
        <ArrowBackIosIcon />
      </span>
      {skins.map((skin, index) => (
        <Skin
          key={skin.name}
          skin={skins[index]}
          index={index}
          name={getChampionName()}
        />
      ))}
      <span
        className={classes.carouselFowardArrow}
        onClick={() => handleCLick("foward")}
      >
        <ArrowForwardIos />
      </span>
    </div>
  )
}
