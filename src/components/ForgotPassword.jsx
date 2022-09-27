import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { forgotPassword } from './actions/Auth'

function ForgotPassword () {
  const [email, setEmail] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log(email)
      const res = await forgotPassword({ email })
      console.log(res)
      if (res.data) {
        toast.success(res.data)
      }
    } catch (err) {
      console.log(err)
      if (err.response.status === 400) {
        toast.err(err.response.data)
      }
    }
  }
  return (
    <>
      <h2 className='text-center'>
        Hey! Please enter your email address to request a password reset
      </h2>
      <form onSubmit={handleSubmit} className='mt-3'>
        <div className='form-group m-3'>
          <label className='form-label'>Email Address</label>
          <input
            type='email'
            className='form-control'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type='submit' disabled={!email} className='btn btn-primary m-3'>Send Reset Password</button>
        <br />
        <p className='p-3'>You remember your password
          <Link to='/login' className='m-2'>
            Login
          </Link>
        </p>
      </form>
    </>
  )
}

export default ForgotPassword
