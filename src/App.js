import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

// Styles
import 'normalize.css';
import './styles/styles.scss';
import ScrollToTop from './components/Layout/ScrollTop';
// Pages
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Governance from './pages/Governance';
import Enterp from './pages/Enterp';
import CommingSoon from './pages/ComingSoon';

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={() => <HomePage />} />
        <Route exact path="/about" component={() => <About />} />
        <Route exact path="/governance" component={() => <Governance />} />
        <Route exact path="/entrepreneurs" component={() => <Enterp />} />
        <Route exact path="/soon" component={() => <CommingSoon />} />
        {/* <Redirect to="/not-found" /> */}
      </Switch>
    </Layout>
  );
}

export default App;
