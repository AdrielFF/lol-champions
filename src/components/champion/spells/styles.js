import { makeStyles } from '@material-ui/styles'

const styles = makeStyles(theme => ({
  spellsWrapper: {
    width: '100%',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  spellDescription: {
    border: [[1, 'solid', theme.palette.grey['700']]],
    flexGrow: 1
  },
  indicator: {
    backgroundColor: 'transparent'
  },
  button: {
    minWidth: 64
  },
  flexContainer: {
    justifyContent: 'center'
  }
}))

export default styles
