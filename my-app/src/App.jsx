import Home from './pages/Home/Home';
import About from './pages/about/About'
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Todolist from './pages/to-do/Todolist';
import Timer from './pages/timer/Timer';
import { Route,Routes } from 'react-router-dom';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Signup' element={<Signup/>}></Route>
      <Route path='/Todolist' element={<Todolist/>}></Route>
      <Route path='/Timer' element={<Timer/>}></Route>

    </Routes>
  {/* <Home/> */}
  {/* <About/> */}
  {/* <Login/>   */}
  {/* <Todolist/> */}
  {/* <Signup/> */}
  <Timer/>
  </>
  )
}
export default App;
