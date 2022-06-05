import { Link } from 'react-router-dom';

const Navbar=()=>{
    return(
        <nav style={{display:"flex",gap:"2rem", justifyContent:"center"}}>
       <Link to="/">Home</Link>
       <Link to="/About">About</Link>
       <Link to="/Contact">Contact</Link>
       <Link to="/users">Users</Link>
       <Link to="/login">Login</Link>
        </nav>
    )
}
export default Navbar;