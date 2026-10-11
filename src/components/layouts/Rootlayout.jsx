import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'

const Rootlayout = function(){

    return(
        <>
        <Nav></Nav>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    )
}

export default Rootlayout