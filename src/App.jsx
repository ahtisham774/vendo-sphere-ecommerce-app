import ComplexNavbar from './components/navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Footer from './components/footer'
import Login from './pages/login'
import Register from './pages/register'
import ProductPage from './pages/productPage'
import Contact from './pages/contact'
import Cart from './pages/cart'
import Page_Not_Found from './pages/page_not_found'

function App() {


    return (

        <>
            <ComplexNavbar />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path='login' element={<Login/>} />
                <Route path="register" element={<Register/>} />
                <Route path="products" element={<ProductPage/> } />
                <Route path="contact" element={<Contact/>} />
                <Route path="cart" element={<Cart/>} />
                <Route path="*" element={<Page_Not_Found/>} />
            </Routes>
            <Footer/>
        </>
    )
}

export default App
