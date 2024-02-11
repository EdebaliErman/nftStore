import './App.css';
import Navbar from './components/Navbar';
import { NFTHomeScreen, NFTSignIn, NFTSignUp } from './pages';

const App = () => {

  return (
    <div>
      hello world
      <hr></hr>
      <Navbar />
      <NFTHomeScreen />
      <NFTSignUp />
      <NFTSignIn />
    </div>
  )
}

export default App