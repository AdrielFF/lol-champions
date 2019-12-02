import React from "react"
import Header from "./header"
import Footer from "./footer/Footer"

function DefaultLayout(props) {
  return (
    <>
      <Header />
        {props.children}
      <Footer/>
    </>
  )
}

export default DefaultLayout