import React from 'react'
import { Typography, Container } from '@material-ui/core'
import styles from './styles'

function Footer() {
  const classes = styles()

  return(
    <footer className={classes.footer}>
      <Container maxWidth="lg">
          <Typography variant="subtitle2" align="right" color="textPrimary">
            Developed by Adriel Fernandes
          </Typography>
      </Container>
    </footer>
  )
}

export default Footer