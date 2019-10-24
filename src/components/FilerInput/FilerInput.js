import React from "react"
import styles from "./styles"
import { Paper, InputBase, IconButton } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"

export default function FilerInput(props) {
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
