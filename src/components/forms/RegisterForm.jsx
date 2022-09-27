import { Link } from 'react-router-dom'

function RegisterForm ({
  handleSubmit,
  email,
  setEmail,
  name,
  setName,
  password,
  setPassword
}) {
  return (
    <div>
      <form onSubmit={handleSubmit} className='mt-3'>
        <div className='form-group m-3'>
          <label className='form-label'>
            Your Name
          </label>
          <input
            className='form-control'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-group m-3'>
          <label className='form-label'>Email address</label>
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
            placeholder='Enter a strong Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          disabled={!email || !password || !name}
          className='btn btn-primary m-3'
        >
          Register
        </button>
        <br />
        <span className='d-flex justify-content-center align-items-center'>
          Already have a account? <Link to='/login' className='p-1'>Login here</Link>
        </span>
      </form>
    </div>
  )
}

export default RegisterForm
