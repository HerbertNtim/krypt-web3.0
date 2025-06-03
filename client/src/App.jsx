import {Navbar, Services, Welcome} from './components'
import Transactions from './components/Transactions'

const  App = () => {
  return (
    <div className="min-h-screen">
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
    </div>
  )
}

export default App
