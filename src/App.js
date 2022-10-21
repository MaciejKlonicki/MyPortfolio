import './App.css';
import HeaderComp from './components/HeaderComp';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Body from './components/Body';
import Applications from './components/Applications';
import Aboutme from './components/aboutMe/Aboutme';
import Chess from './components/projects/Chess';
import Snake from './components/projects/Snake';
import Huffman from './components/projects/Huffman';
import Library from './components/projects/Library';
import FooterComp from './components/FooterComp';
import Diabetes from './components/projects/Diabetes';

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
          <Route path='/applications/huffman' exact component={Huffman}/>
          <Route path='/applications/library' exact component={Library}/>
          <Route path='/applications/diabetes' exact component={Diabetes}/>
        </Switch>
        <FooterComp />
      </Router>
    </>
  );
}

export default App;