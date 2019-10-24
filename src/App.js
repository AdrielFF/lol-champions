import React from "react"
import "./App.css"
import Routes from "./routes"
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    primary: "#ef9610",
  },
})

const App = () => (
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>
)

export default App
