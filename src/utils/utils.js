import React from 'react'
import routes from '../config/routes'
import './polyfill'
import { Route } from 'react-router-dom'

export function routesMapConfig() {
  const buildSingle = tree =>
    tree.screens.map(x => ({
      path: tree[x].path,
      component: tree[x].component,
    }))

  const buildRoutes = branch =>
    (branch.screens.length ? buildSingle(branch) : []).concat(
      branch.screens.flatMap(x =>
        branch[x].screens.length ? buildSingle(branch[x]) : []
      )
    )
  return buildRoutes(routes)
}

export function routesMap() {
  return routesMapConfig().map((route, i) => (
    <Route key={i} path={route.path} exact component={route.component} />
  ))
}
