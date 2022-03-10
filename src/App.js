import './App.css';
import HeaderComp from './components/HeaderComp';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Body from './components/Body';
import Applications from './components/Applications';
import Aboutme from './components/Aboutme';

function App() {
  return (
    <>
      <Router>
        <HeaderComp />
        <Switch>
          <Route path='/' exact component={Body} />
          <Route path='/applications' exact component={Applications} />
          <Route path='/aboutme' exact component={Aboutme} />
        </Switch>
      </Router>
    </>
  );
}

export default App;