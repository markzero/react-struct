import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import routes from './config/routes'
import Layout from './shared/components/Layout'
import { routesMap } from './utils/utils'

const Index = () => (
  <Router>
    <Layout>
      <Switch>
        {routesMap()}
        <Route path={routes.path} exact component={routes.component} />
      </Switch>
    </Layout>
  </Router>
)

ReactDOM.render(<Index />, document.getElementById('app'))
