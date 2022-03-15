import './App.css';
import HeaderComp from './components/HeaderComp';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Body from './components/Body';
import Applications from './components/Applications';
import Aboutme from './components/Aboutme';
import Chess from './components/Chess';
import Snake from './components/Snake';

function App() {
  return (
    <>
      <Router>
        <HeaderComp />
        <Switch>
          <Route path='/' exact component={Body} />
          <Route path='/applications' exact component={Applications} />
          <Route path='/aboutme' exact component={Aboutme}/>
          <Route path='/applications/chess' exact component={Chess}/>
          <Route path='/applications/snake' exact component={Snake}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;