import { Routes, Route } from 'react-router-dom'
import Home from "../pages/Home"
import SignUp from "../pages/SignUp"
import Confirmation from "../pages/Confirmation"
import PageNotFound from '../pages/404Page'
import Error from '../pages/Error'

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/confirmation" element ={<Confirmation />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
      <Route path="/error" element={<Error />}></Route>
    </Routes>
  )
}

export default MainRoutes