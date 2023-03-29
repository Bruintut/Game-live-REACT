import Home from "pages/Home"
import Login from "pages/Login"
import { Route } from "react-router"
import { Routes } from "react-router-dom"
import { RoutePath } from "types/routes"

const Router = () =>{
    return(
        <Routes>
            <Route path={RoutePath.LOGIN} element={<Login/>}/>
            <Route path={RoutePath.HOME} element={<Home/>}/>
        </Routes>
    )
}

export default Router;