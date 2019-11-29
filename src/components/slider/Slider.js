import React, { useState } from 'react'
import { withStyles } from '@material-ui/styles'
import styles from './styles'
import { Typography } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos'
// import PropTypes from 'prop-types'

function Slider(props) {
    const { classes } = props
    const [currentItem, setCurrentItem] = useState(0)
    const [items] = useState(props.items)

  const handleClick = nextItem => {

    const firstItem = 0
    const lastItem = items.length - 1
    const isLastItem = currentItem === lastItem
    const isFirstItem = currentItem === firstItem

    if (nextItem === 'foward') {
      setCurrentItem(isLastItem ? firstItem : currentItem + 1)

      return
    }

    setCurrentItem(isFirstItem ? lastItem : currentItem - 1)
  }

  const getActiveClass = index => {
    return index === currentItem ? classes.itemActive : ''
  }

  const getItemDescription = () => items[currentItem].title

  const renderItems = () => {

    return items.map((item, index) => (
      <div
        key={index}
        className={`${classes.itemWrapper} ${getActiveClass(index)}`}
      >
        <img src={item.src} alt='' />
        <div className={classes.itemNameWrapper}>
          <Typography>{getItemDescription()}</Typography>
        </div>
      </div>
    ))
  }

  return (
    <div className={classes.carouselWrapper}>
      <span
        className={classes.carouselBackArrow}
        onClick={() => handleClick('back')}
      >
        <ArrowBackIosIcon />
      </span>
      {renderItems()}
      <span
        className={classes.carouselFowardArrow}
        onClick={() => handleClick('foward')}
      >
        <ArrowForwardIos />
      </span>
    </div>
  )
}

// Slider.propTypes = {
//   currentSkin: PropTypes.number.isRequired,

//   skins: PropTypes.arrayOf(
//     PropTypes.shape({
//       src: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired
//     })
//   ),

//   handleClick: PropTypes.func.isRequired,
//   name: PropTypes.string.isRequired
// }
export default withStyles(styles)(Slider)
