import React, { lazy, Suspense } from 'react'
import { Container } from 'reactstrap';
import { Redirect, Route, Switch } from 'react-router-dom';

const Header = lazy(() => import('./Header'));
const Footer = lazy(() => import('./Footer'));

const Board = lazy(() => import('../../pages/Board'));
const CreateSession = lazy(() => import('../../pages/CreateSession'));
const Home = lazy(() => import('../../pages/Home'));

const Layout = () => {
  const loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  return (
    <div>
      <Suspense fallback={loading()}>
        <Header />
      </Suspense>

      <main>
        <Container>
          <Switch>
            <Route
              path="/board"
              exact={true}
              name="Board"
              render={props => <Board {...props} />}
            />

            <Route
              path="/create-session"
              name="CreateSession"
              render={props => <CreateSession {...props} />}
            />
            <Route
              path="/"
              name="Home"
              render={props => <Home {...props} />}
            />

            {/* <Redirect from="/" to="/home" /> */}
          </Switch>
        </Container>
      </main>

      <Suspense fallback={loading()}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default Layout;