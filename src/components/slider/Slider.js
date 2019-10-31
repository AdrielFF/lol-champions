import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import styles from './styles'
import { Typography } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos'
import PropTypes from 'prop-types'

class Slider extends Component {
  constructor (props) {
    super(props)
    console.log(props.items)

    this.state = {
      currentItem: 0,
      items: this.props.items
    }
  }

  handleClick = nextItem => {
    const { currentItem, items } = this.state

    const firstItem = 0
    const lastItem = items.length - 1
    const isLastItem = currentItem === lastItem
    const isFirstItem = currentItem === firstItem

    if (nextItem === 'foward') {
      this.setState({
        currentItem: isLastItem ? firstItem : currentItem + 1
      })

      return
    }

    this.setState({
      currentItem: isFirstItem ? lastItem : currentItem - 1
    })
  }

  getActiveClass = index => {
    const { classes } = this.props
    return index === this.state.currentItem ? classes.itemActive : ''
  }

  getItemDescription = () => this.state.items[this.state.currentItem].title

  renderItems = () => {
    const { classes } = this.props
    return this.state.items.map((item, index) => (
      <div
        key={index}
        className={`${classes.itemWrapper} ${this.getActiveClass(index)}`}
      >
        <img src={item.src} alt='' />
        <div className={classes.itemNameWrapper}>
          <Typography>{this.getItemDescription()}</Typography>
        </div>
      </div>
    ))
  }

  render () {
    const { classes } = this.props
    return (
      <div className={classes.carouselWrapper}>
        <span
          className={classes.carouselBackArrow}
          onClick={() => this.handleClick('back')}
        >
          <ArrowBackIosIcon />
        </span>
        {this.renderItems()}
        <span
          className={classes.carouselFowardArrow}
          onClick={() => this.handleClick('foward')}
        >
          <ArrowForwardIos />
        </span>
      </div>
    )
  }
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
