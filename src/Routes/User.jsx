import {
  useContext,
  useEffect,
  useState,
} from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';

import { AuthContext } from '../Context/AuthContext';

function Users(){
        const [Loading,setLoading]=useState(true)
        const[data,setData]=useState(null);
        const[state]=useContext(AuthContext)
        useEffect(() => {
            setLoading(true)
            axios({
                url:`https://reqres.in/api/users/`,
                method:"GET"
            }).then(res=>{
                setLoading(false)
                setData(res.data)
            })
            .catch(err=>{
                setLoading(false)
            })
        }, [])
        // if(!isAuth){
        //     return <Navigate to="/login"/>
        // }
        console.log(data)
        return(
        <div>
            {state.token&& <h3>Token:{state.token}</h3>}
    {Loading && <div>Loading</div>}
    {data?.data?.map((item)=>(
        <div style={{marginBottom:"1rem"}} key={item.id}>
        <div>Name:{item.first_name}</div>
        <div>Email:{item.email}</div>
        <Link to={`/users/${item.id}`}>See More</Link>
        </div>
    ))}
    
        </div>
        )
    }
    export default Users;