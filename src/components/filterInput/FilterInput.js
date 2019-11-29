import React from "react"
import styles from "./styles"
import { Paper, InputBase } from "@material-ui/core"

export default function FilterInput(props) {
  const classes = styles()

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        onChange={props.handleChange}
        value={props.value}
        placeholder="(ex: Ryze)"
      />
    </Paper>
  )
}
