import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import "./App.css"
import * as serviceWorker from "./serviceWorker"
import Routes from "./routes"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ef9610",
    },
    text: {
      primary: "#ef9610",
    },
  },
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>,
  document.getElementById("root")
)

serviceWorker.unregister()
