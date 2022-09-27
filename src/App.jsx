import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/React-Toastify.css'
import Dashboard from './components/Dashboard'
import ForgotPassword from './components/ForgotPassword'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import ResetPassword from './components/ResetPassword'
import Nav from './components/Nav'

function App () {
  return (
    <Router>
      <>
        <Nav />
        <ToastContainer position='top-right' />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/register'>
            <Register />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/forgot-password'>
            <ForgotPassword />
          </Route>
          <Route exact path='/reset-password'>
            <ResetPassword />
          </Route>
          <Route exact path='/dashboard'>
            <Dashboard />
          </Route>
        </Switch>
      </>
    </Router>

  )
}

export default App
