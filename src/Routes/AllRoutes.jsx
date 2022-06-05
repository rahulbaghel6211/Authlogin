import {
  Route,
  Routes,
} from 'react-router-dom';

import About from './About';
import Contact from './Contact';
import Home from './Home';
import Login from './Login';
import Navbar from './Navbar';
import PrivateRoute from './PrivateRoute';
import Users from './User';
import UsersPage from './UserPage';

function AllRoutes(){
    return(
        <>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            
            <Route path='/users' element={
                <PrivateRoute>
            <Users/>
            </PrivateRoute>
            }></Route>
            <Route path='/users/:id' element={<UsersPage/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
        </Routes>
        </>
    )
}
export default AllRoutes