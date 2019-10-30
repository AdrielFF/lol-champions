import { makeStyles } from '@material-ui/styles'
import { cursor } from 'sisteransi'

const styles = makeStyles(theme => ({
  carouselWrapper: {
    position: 'relative',
    width: '100%',
    height: '100%'
  },
  carouselBackArrow: {
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer'
  },
  carouselFowardArrow: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer'
  },
  skinNameWrapper: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    width: '100%',
    height: '150px',
    background:
      'linear-gradient(to bottom,  rgba(137,255,241,0) 0%,rgba(0,0,0,1) 43%)'
  }
}))

export default styles
