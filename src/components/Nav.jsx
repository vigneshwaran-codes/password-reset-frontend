import { Link } from 'react-router-dom'
import HomeImg from './home.png'

import React from 'react'

function Nav () {
  return (
    <div className='nav d-flex justify-content-center p-2'>
      <h1>
        <Link to='/' className='top-nav'>
          <img src={HomeImg} alt='home' />
        </Link>
      </h1>

    </div>
  )
}

export default Nav
