import './App.css';
import HeaderComp from './components/HeaderComp';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Applications from './components/Applications';

function App() {
  return (
    <>
      <Router>
        <HeaderComp />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/applications' exact component={Applications} />
        </Switch>
      </Router>
    </>
  );
}

export default App;