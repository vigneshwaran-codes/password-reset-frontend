import { useLottie } from 'lottie-react'
import dashboardLottie from './dashboardLottie.json'
import { useHistory } from 'react-router-dom'

function Dashboard () {
  const history = useHistory()

  // anime

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: dashboardLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const mod = {
    height: 500,
    width: 500
  }

  const { View } = useLottie(defaultOptions, mod)

  const handleClick = () => {
    history.push('/')
  }

  return (
    <div>
      <div className='container-fluid mt-4'>
        <div className='row'>
          <div className='col-md-6'>{View}</div>
          <div className='col-md-6'>
            <h1>hey there! Welcome</h1>
            <h3>
              I'm Vigneshwaran K. Super kid, Passionate Web enthusiast . Loves to develope visual appealing design and seamless.
            </h3>
            <h4>Thanks for stopping by, glad to check my projects on Github</h4>
            <h6>
              <button onClick={handleClick}> Logout </button>
            </h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
