import './App.css';
import HeaderComp from './components/HeaderComp';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';


function App() {
  return (
    <>
      <Router>
        <HeaderComp />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;