import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
          title2
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)
  const { title, menuLinks, title2 } = data.site.siteMetadata
  return (
    <header className={headerStyles.header}>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <nav className={headerStyles.navigation}>
              <a href="/" className={headerStyles.logo}>
                {title}
                <em> {title2}</em>
              </a>

              <ul className={headerStyles.nav}>
                {menuLinks.map(link => (
                  <li key={link.name}>
                    {" "}
                    <Link to={link.link}>{link.name}</Link>
                  </li>
                ))}
                <li class="main-button">
                  <a href="#">Sign Up</a>
                </li>
              </ul>

              <a className={headerStyles.menuTrigger}><span>Menu</span></a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
