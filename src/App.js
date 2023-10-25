import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Body from './components/Body';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Body} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;