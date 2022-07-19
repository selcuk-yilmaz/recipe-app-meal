import {BrowserRouter,Routes,Route} from "react-router-dom"
import Deatail from "../pages/detail/Deatail"
import { GlobalStyles } from "../components/globalStyles/GlobalStyles"
import Navbar from "../components/nav/Navbar"
import About from "../pages/about/About"
import Home from "../pages/home/Home"
import Login from "../pages/login/Login"
import PrivateRouter from "./PrivateRouter"
import Register from "../pages/register/Register"

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <GlobalStyles />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path={"login"}  element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path={"about"} element={<PrivateRouter />}>
            <Route path={""} element={<About />} />
        </Route>
        <Route path={"detail"} element={<PrivateRouter />}>
            <Route path={""} element={<Deatail />} />
        </Route>
        

    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter