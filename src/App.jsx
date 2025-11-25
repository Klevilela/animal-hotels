import { BrowserRouter,Routes, Route } from 'react-router'
import Login from './Login'
import Register from './Register'


function App() {
  

  return(

    <BrowserRouter>
      <Routes>
        <Route index element={<Login />}></Route>
        <Route path='/registro' element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
