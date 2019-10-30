import { makeStyles } from "@material-ui/styles"

const styles = makeStyles(theme => ({
  statsWrapper: {
    height: "100%",
  },
  info: {
    height: 633,
    display: "flex",
    marginBottom: "2em",
    padding: "1em",
    backgroundColor: "rgba(19, 19, 19, .85)",
    border: "2px solid rgba(255,255,255, .2)",
  },
  imageWrapper: {
    border: "1px solid rgba(255,255,255, .2)",
    padding: "1em",
  },
}))

export default styles