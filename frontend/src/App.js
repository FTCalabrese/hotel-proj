import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/Login/Login.jsx';
import Home from './components/Home/Home.jsx';

const baseURL = 'http://localhost:8080';

function App() {
  /**
   * Need to set loggedIn status here with a useState hook
   * if the user is loggedIn then allow them to go to application and show information
   * otherwise get them to login with the Google sign on
   * 
   */
  return (
    <div className="App">
        <Router>
          <Switch>
              <Route path = '/login'>
                    <Login base={baseURL}/>
              </Route>
              <Route exact path='/'>
                    <Home/>
              </Route>
          </Switch>
        
        </Router>

        
    </div>
  );
}

export default App;
