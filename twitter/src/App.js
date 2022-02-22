import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import { useState } from 'react';
import CommentModal from './components/CommentModal';
import Tweet from './pages/Tweet';
import SignOutAlert from './components/SignOutAlert';
import Account from './components/Account';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  const [commentModal, setCommentModal] = useState(false)
  const [user, setUser] = useState('')
  //console.log(user)
  return (
    <div className="App">

      <Router>
        <Switch>

          < Route exact path='/'>
            {!user ? <Redirect to='/account' /> : <Home commentModal={commentModal} setCommentModal={setCommentModal} />}

          </Route>
          <Route path='/notifications'>
            <Notifications commentModal={commentModal} setCommentModal={setCommentModal} />
          </Route>
          <Route path='/profile'>
            <Profile commentModal={commentModal} setCommentModal={setCommentModal} />
          </Route>
          <Route path='/tweet'>
            <Tweet commentModal={commentModal} setCommentModal={setCommentModal} />
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
      {
        commentModal &&
        <CommentModal commentModal={commentModal} setCommentModal={setCommentModal} />
      }
    </div >
  );
}

export default App;
