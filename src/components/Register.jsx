import { useState } from 'react'
import RegisterForm from './forms/RegisterForm'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'
import registerLottie from './registerLottie.json'
import { register } from './actions/Auth'
import { useLottie } from 'lottie-react'

function Register () {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await register({
        name,
        email,
        password
      })
      history.push('/login')
      toast.success(
        'Registration Successful.. ! Please verify your email before Logging in.'
      )
    } catch (err) {
      console.log(err)
      if (err.response.status === 400) { toast.err(err.response.data) }
    }
  }

  // Lottie animation

  const DefaultOptions = {
    loop: false,
    autoplay: true,
    animationData: registerLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const mod = {
    height: 500,
    width: 500
  }

  const { View } = useLottie(DefaultOptions, mod)
  return (
    <>
      <div className='container-fluid' p-5 text-center>
        <h1>Sign Up for an Account</h1>
        <h5>Let's get you all set up so you can start creating your first onboarding experience</h5>
      </div>
      <br />
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <RegisterForm
              handleSubmit={handleSubmit}
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          </div>
          <div
            className='col'
          >
            <div>{View}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
