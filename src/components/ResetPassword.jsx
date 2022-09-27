import { useState } from 'react'
import { toast } from 'react-toastify'
import { resetPassword } from './actions/Auth'
import { useHistory, useParams } from 'react-router-dom'

function ResetPassword () {
  const [password, setPassword] = useState('')
  const { resetLink } = useParams()
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log(resetLink)
      const res = await resetPassword({ password, resetLink })
      if (res.data) {
        toast.success(res.data)
        history.push('/login')
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
      <div>
        <h2>
          Hey! One step away to change the password. Enter the password and submit.
        </h2>
        <form onSubmit={handleSubmit} className='mt-3'>
          <div className='form-group m-3'>
            <label className='form-label'>Password</label>
            <input
              type='password'
              className='form-control'
              placeholder='Enter your password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type='submit' className='btn btn-primary'> Submit </button>
        </form>
      </div>
    </>
  )
}

export default ResetPassword
