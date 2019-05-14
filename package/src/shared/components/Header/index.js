import React from 'react'
import { Link } from 'react-router-dom'
import routes from '../../../config/routes'

const mainLinksConfig = routes.screens.map(screen => ({
  path: routes[screen].path,
  screen,
}))

const Header = () => {
  return (
    <div>
      <Link to={routes.path}>{routes.name}</Link>
      {mainLinksConfig.map((link, i) => (
        <Link key={i} to={link.path}>
          {link.screen}
        </Link>
      ))}
    </div>
  )
}

export default Header
