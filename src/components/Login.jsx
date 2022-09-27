import React, { useState } from 'react'
import LoginForm from './forms/LoginForm'
import { useLottie } from 'lottie-react'
import loginLottie from './loginLottie.json'
import { toast } from 'react-toastify'
import { login } from './actions/Auth'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const dispatch = useDispatch()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await login({ email, login })
      console.log(res)

      window.localStorage.setItem('auth', JSON.stringify(res.data))

      // save user and token to redux
      dispatch({
        type: 'LOGGED_IN_USER',
        payload: res.data
      })
      history.push('/dashboard')
      toast.success('Login Successfully')
    } catch (err) {
      console.log(err)
      if (err.response.status === 400) {
        toast.error(err.response.data)
      }
    }
  }

  // Lottie Anime

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: loginLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const mod = {
    height: 500,
    width: 500
  }

  const { View } = useLottie(defaultOptions, mod)

  return (
    <>
      <div className='container-fluid p-5 text-center'>
        <h1>Hello, Welcome back!</h1>
        <br />
        <h5>Log in to your account so you can continue building and editing your onboarding flows</h5>
      </div>
      <br />
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <LoginForm
              handleSubmit={handleSubmit}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          </div>
          <div className='col'>
            {View}
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
