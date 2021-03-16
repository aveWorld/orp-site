import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Styles
import 'normalize.css';
import './styles/styles.scss';
import ScrollToTop from './components/Layout/ScrollTop';
// Pages
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Governance from './pages/Governance';
import GetInvoled from './pages/GetInvoled';
import CommingSoon from './pages/ComingSoon';

function App() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Layout>
          <Route exact path="/" component={() => <HomePage />} />
          <Route exact path="/about" component={() => <About />} />
          <Route exact path="/governance" component={() => <Governance />} />
          <Route exact path="/get-involved" component={() => <GetInvoled />} />
          <Route exact path="/soon" component={() => <CommingSoon />} />
        </Layout>
        {/* <Redirect to="/not-found" /> */}
      </Switch>
    </>
  );
}

export default App;
