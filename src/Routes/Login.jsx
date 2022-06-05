import { useContext } from 'react';

import axios from 'axios';
import {
  Navigate,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

import { AuthContext } from '../Context/AuthContext';

function Login(){
    const [state,dispatch]=useContext(AuthContext);
    const navigate=useNavigate()

    const [searchParams, setSearchParams]=useSearchParams()

    const LoginUser= async()=>{
     axios({
         url:"https://reqres.in/api/login",
         method:"POST",
         data: {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }
     })
     .then(res=>{
         alert("login success")
         dispatch({
             type:"LOGIN_SUCCESS",
             payload:res.data.token
         })
         const redirect=searchParams.get("redirectTo")
         if(redirect){
             navigate(redirect)
         }else{
            navigate("/users")
         }
         
     })
     .catch(err=>{
         alert("login fail")
     })
    }
    if(state.isAuth){
        return<Navigate to="/"/>
    }
    return (
        <>
        <h2>Login</h2>
        <button onClick={LoginUser}>login</button>
        </>
    )
}
export default Login;