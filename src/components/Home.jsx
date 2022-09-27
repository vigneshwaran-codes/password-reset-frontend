import React from 'react'
import { Link } from 'react-router-dom'
import { useLottie } from 'lottie-react'
import welcomeLottie from './welcomeLottie.json'

function Home () {
  // Lottie anime

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: welcomeLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const mod = {
    height: 150,
    width: 200
  }

  const { View } = useLottie(defaultOptions, mod)
  return (
    <>
      <div className='container-fluid text-center'>
        <div className='home-card'>
          <div
            className='card text-center home-card-bg p-2'
            style={{ width: '50rem' }}
          >
            <h1 className='card-title'> Don't Have an Account Yet?</h1>
            <div>
              {View}
            </div>
            <div className='card-body'>
              <h3> Click here to register </h3>
              <Link className='nav-link' to='/register'>
                <button className='btn btn-primary'>Sign Up</button>
              </Link>
              <h3>Already Signed Up?</h3>
              <Link className='nav-link' to='/login'>
                <button className='btn btn-primary'>Login</button>
              </Link>
            </div>
          </div>
        </div>
        <br />
        <p className='container-fluid alert alert-info'>
          Note : Please register with valid credentials
        </p>
      </div>
    </>
  )
}

export default Home
