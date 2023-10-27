import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Body from './components/Body';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import NotFound from './components/NotFound';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Body} />
          <Route path='/about-me' component={AboutMe} />
          <Route path='/projects' component={Projects} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;