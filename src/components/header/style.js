import { makeStyles } from '@material-ui/styles'

const styles = makeStyles(theme => ({
  header: {
    width: '100%',
    height: '10vh',
    borderBottom: [[1, 'solid', theme.palette.primary.dark]],
    padding: theme.spacing(0, 5),
    backgroundColor: theme.palette.grey['900']
  },
  logo: {
    color: theme.palette.primary.main
  }
}))

export default styles
