const styles = theme => ({
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
    width: 67,
    minWidth: 0
  },
  flexContainer: {
    justifyContent: 'center'
  }
})

export default styles
