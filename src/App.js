import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="app">

        <Switch>
          <Route path='/checkout'>
            <h1>Checkout Component</h1>
          </Route>
          <Route path='/login'>
            <h1>Login Component</h1>
          </Route>
          {/* This is default path. */}
          <Route path='/'>
            <Header/>
            <Home/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
