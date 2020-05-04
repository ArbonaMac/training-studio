import React, { Fragment } from "react"
import Header from "../header/header"
import Footer from "../footer/footer"
import layoutStyles from "./layout.module.scss"
import "../../styles/global.scss"

const Layout = props => {
  return (
    <Fragment>
      <Header />
      <div className={layoutStyles.content}>{props.children}</div>
      <Footer />
    </Fragment>
  )
}
    
export default Layout
