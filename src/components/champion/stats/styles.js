import { makeStyles } from "@material-ui/styles"

const styles = makeStyles(theme => ({
  stats: {
    position: "relative",
    backgroundColor: "transparent",
    border: "1px solid rgba(255,255,255, .2)",
    minHeight: 300,
  },
  chart: {
    position: "relative",
  },
  loader: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}))

export default styles
