import Login from './Components/Login';
import Home from './Components/Home';
import {useSelector } from 'react-redux';

function App() {
  const logStatus = useSelector(state => state.loginAuth.logStatus)

  return (
    <div className="App">             
        {logStatus? <Home/> :<Login/>}
    </div>
  );
}

export default App;
