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
import Enterpreneurs from './pages/Enterpreneurs';
import Integrators from './pages/Integrators';
import Investors from './pages/Investors';
import Operators from './pages/Operators';

function App() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route exact path="/enterpreneurs" component={() => <Enterpreneurs />} />
        <Route exact path="/tech-integrators" component={() => <Integrators />} />
        <Route exact path="/investors" component={() => <Investors />} />
        <Route exact path="/project-operators" component={() => <Operators />} />
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
