import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

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
          <Route path='/'>
            <h1>Homepage</h1>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;