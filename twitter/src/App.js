import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import { useEffect, useState } from 'react';
import Tweet from './pages/Tweet';
import SignOutAlert from './components/SignOutAlert';
import Account from './components/Account';
import Login from './components/Login';
import Register from './components/Register';
import { useDispatch, useSelector } from 'react-redux';
import { getUserSuggestions } from './redux/apiCalls';
import Loading from './components/Loading'

function App() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.current_user);
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    getUserSuggestions(user?._id, dispatch)
  }, [user, dispatch])


  return (
    <div className="App">
      {isLoading ?
        <Loading />
        :
        <Router>
          <Switch>

            < Route exact path='/'>
              {!user ? <Redirect to='/account' /> : <Home />}

            </Route>
            <Route path='/notifications'>
              <Notifications />
            </Route>
            <Route path='/user/:userId'>
              <Profile />
            </Route>
            <Route path='/tweet/:tweetId/get'>
              <Tweet />
            </Route>
            <Route path='/logout'>
              {!user ? <Redirect to='/account' /> : <SignOutAlert />}

            </Route>

            <Route path='/account'>
              {!user ? <Account /> : <Redirect to='/' />}
            </Route>
            <Route path='/login'>
              {!user ? <Login /> : <Redirect to='/' />}

            </Route>
            <Route path='/register'>
              {!user ? <Register /> : <Redirect to='/' />}

            </Route>

          </Switch>
        </Router>
      }
    </div >
  );
}

export default App;
