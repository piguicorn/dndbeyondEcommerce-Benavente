import { Routes, Route, Navigate } from 'react-router-dom';
/* context */
import { CartProvider } from '../../context/cartContext';
import { AuthProvider } from '../../context/authContext';
/* styles */
import './App.css';
/* components */
import Header from '../Header';
import Footer from '../Footer';
import LoginPage from '../LoginPage';
import UserProfile from '../UserProfile';
import ProductListing from '../ProductListing/ProductListing';
import ProductDetail from '../ProductDetail';
import Cart from '../Cart';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {

    return (
        <CartProvider>
            <AuthProvider>
                <div className='app'>
                    <Header />
                    <Routes>
                        <Route index path='/' element={<Navigate to='/marketplace' replace />} />
                        <Route index path='/marketplace' element={<ProductListing />} />
                        <Route path='/marketplace/:categoryId' element={<ProductListing />} />
                        <Route path='/marketplace/:categoryId/:productId' element={<ProductDetail />} />
                        <Route index path='/marketplace/cart' element={<Cart />} />
                        <Route path='/register' element={<LoginPage register={true} />} />
                        <Route path='/sign-in' element={<LoginPage register={false} />} />
                        <Route path='/profile' element={<UserProfile />} />
                        <Route path='/not-found' element={<PageNotFound />} />
                        <Route path='*' element={<Navigate to='/not-found' replace />} />
                    </Routes>
                    <Footer/>
                </div>
            </AuthProvider>
        </CartProvider>
    )
}

export default App;