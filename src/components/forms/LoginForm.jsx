import { Link } from 'react-router-dom'

function LoginForm ({
  handleSubmit,
  email,
  setEmail,
  password,
  setPassword
}) {
  return (
    <div>
      <form onSubmit={handleSubmit} className='mt-3'>
        <span className='d-flex justify-content-center align-items-center'>
          Don't have an account?<Link to='/register' className='p-1'>Create an account</Link>
        </span>
        <span className='d-flex justify-content-center align-items-center'>
          It will take less than a minute
        </span>
        <div className='form-group m-3'>
          <label className='form-label'>Email</label>
          <input
            type='email'
            className='form-control'
            placeholder='Enter Your email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-group m-3'>
          <label className='form-label'>Password</label>
          <input
            type='password'
            className='form-control'
            placeholder='Enter Your Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          disabled={!email || !password}
          className='btn btn-primary m-3'
        >
          Login
        </button>
        <br />
        <span className='d-flex justify-content-center align-items-center'>
          <Link to='/forgot-password'>
            Forget your password?
          </Link>
        </span>
      </form>
    </div>
  )
}

export default LoginForm
