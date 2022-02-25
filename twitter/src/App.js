import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import { useState } from 'react';
import Tweet from './pages/Tweet';
import SignOutAlert from './components/SignOutAlert';
import Account from './components/Account';
import Login from './components/Login';
import Register from './components/Register';


function App() {

  const [user, setUser] = useState('')

  return (
    <div className="App">

      <Router>
        <Switch>

          < Route exact path='/'>
            {!user ? <Redirect to='/account' /> : <Home />}

          </Route>
          <Route path='/notifications'>
            <Notifications />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/tweet'>
            <Tweet />
          </Route>
          <Route path='/logout'>
            {!user ? <Redirect to='/account' /> : <SignOutAlert setUser={setUser} />}

          </Route>

          <Route path='/account'>
            {!user ? <Account /> : <Redirect to='/' />}
          </Route>
          <Route path='/login'>
            {!user ? <Login setUser={setUser} /> : <Redirect to='/' />}

          </Route>
          <Route path='/register'>
            {!user ? <Register /> : <Redirect to='/' />}

          </Route>

        </Switch>
      </Router>

    </div >
  );
}

export default App;
