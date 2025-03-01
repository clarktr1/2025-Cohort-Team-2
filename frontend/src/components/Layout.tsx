import { Outlet, Route, Routes } from "react-router"
import Header from "./Header"
import HomePage from "./HomePage"

const Layout = () => {
  return (
    <div>
        <Header />
        <div>
            <Outlet />
        </div>
        <Routes>
            <Route index element={<HomePage />} />
        </Routes>
    </div>
    
  )
}

export default Layout