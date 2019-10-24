import { makeStyles } from "@material-ui/styles"

const styles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.grey["700"],
    display: "flex",
    justifyContent: "space-between",
    padding: ".3em",
  },
  input: {
    fontWeight: "bolder",
    width: "100%",
  },
}))

export default styles
