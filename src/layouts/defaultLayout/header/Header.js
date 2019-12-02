import React from "react"
import styles from "./style"
import Grid from "@material-ui/core/Grid"
import { Typography } from "@material-ui/core"
import { Link } from "react-router-dom"

export default function Header() {
  const classes = styles()

  return (
    <Grid className={classes.header} container alignItems="center">
      <Typography>
        <Link to="/" className={classes.logo}>
          LOLChampions
        </Link>
      </Typography>
    </Grid>
  )
}
