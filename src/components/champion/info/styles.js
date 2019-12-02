import { makeStyles } from "@material-ui/styles"

const styles = makeStyles(theme => ({
  infoWrapper: {
    margin: '0 auto'
  },
  statsWrapper: {
    height: "100%",
  },
  infoPaper: {
    width: '100%',
    minHeight: 633,
    marginBottom: "2em",
    backgroundColor: "rgba(19, 19, 19, .85)",
    // border: "2px solid rgba(255,255,255, .2)",
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '1em 0',
    [theme.breakpoints.up('md')]: {
      flexDirection: "row",
      justifyContent: "space-around"
    }
  },
  imageWrapper: {
    width: '100%',
    height: 560,
    marginBottom: '1em',
    '& img': {
      width: '100%'
    }
  }
}))

export default styles
