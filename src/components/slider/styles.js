const styles = props => ({
  carouselWrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: 268,
    height: '100%',
    margin: '0 auto',
    border: "1px solid rgba(255,255,255, .2)"
  },
  carouselBackArrow: {
    position: 'absolute',
    left: 5,
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    zIndex: 999
  },
  carouselFowardArrow: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    zIndex: 999
  },
  itemWrapper: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    opacity: 0,
    width: '100%'
  },
  itemNameWrapper: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    width: '100%',
    height: '150px',
    background:
      'linear-gradient(to bottom,  rgba(137,255,241,0) 0%,rgba(0,0,0,1) 43%)'
  },
  itemActive: {
    zIndex: 99,
    opacity: 1,
    width: '100%'
  },
  sliderImage: {
    maxWidth: 268
  }
})

export default styles
