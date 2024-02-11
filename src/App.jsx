import './App.css';
import Navbar from './components/Navbar';
import { NFTHomeScreen, NFTSignIn, NFTSignUp } from './pages';

const App = () => {

  return (
    <div>
      <Navbar />
      <NFTHomeScreen />
      <NFTSignUp />
      <NFTSignIn />
    </div>
  )
}

export default App