// src/AppRouter.tsx

import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { AppBackground } from './components/AppBackground'
import { ModalSpinner } from './components/ModalSpinner'
import { HomePage } from './pages/HomePage'
import { MovieList } from './pages/MovieList/MovieList'

const AppRouter: React.FC = (): JSX.Element => {
  return (
    <>
      <AppBackground />
      <Router>
        <RecoilRoot>
          <Suspense fallback={<ModalSpinner />}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/search" component={MovieList} />
            </Switch>
          </Suspense>
        </RecoilRoot>
      </Router>
    </>
  )
}

/*
// TODO EE: To replace Recoil with Redux Toolkit;

import { Provider } from 'react-redux'
import store from './redux/store'

<Router>
  <Provider store={store}>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </Provider>
</Router>

 */

/*

// TODO: EE: Without Recoil or Redux Toolkit;

// src/AppRouter.tsx

import React, { FunctionComponent } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'

const AppRouter: FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </Router>
  )
}

 */

export default AppRouter
