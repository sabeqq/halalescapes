
import {  } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';




function App() {
  return (
    <Router>
      <Nav/>
      <Hero/>
      <Switch>
        <Route path='/'/>
      </Switch>
    </Router>
  );
}

export default App;
