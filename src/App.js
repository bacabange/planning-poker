import React, { lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

const DefaultLayout = lazy(() => import('./containers/DefaultLayout/Layout'));

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

function App() {
  return (
    <ThemeProvider theme={{
      colors: {
        primary: `#46C9FF`,
        secondary: `#F75653`,
        backgroundColor: `#F6FBFF`,
        dark: `#2C344E`,
        gray1: `#9BAEC8`
      }
    }}>
      <Router>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route
              path="/"
              name="Main"
              render={props => <DefaultLayout {...props} />}
            />
          </Switch>
        </React.Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
