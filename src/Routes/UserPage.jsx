import {
  useEffect,
  useState,
} from 'react';

import axios from 'axios';
import { useParams } from 'react-router-dom';

function UsersPage(){
      const [Loading,setLoading]=useState(true)
      const[data,setData]=useState([]);
      const params=useParams()
      console.log(params);
      useEffect(() => {
          setLoading(true)
          const {id}= params;
          axios({
              url:`https://reqres.in/api/users/${id}`,
              method:"GET"
          }).then(res=>{
              setLoading(false)
              setData(res.data)
          })
          .catch(err=>{
              setLoading(false)
          })
      }, [params.id])
      console.log(data);
      return(
      <div>
  {Loading && <div>Loading</div>}
 
      <div style={{marginBottom:"1rem"}} key={data?.data?.id}>
     <img src={data?.data?.avatar} alt="icon" width="60px" />
      <div>FirstName:{data?.data?.first_name}</div>
      <div>LastName:{data?.data?.last_name}</div>
      <div>Email:{data?.data?.email}</div>
      </div>
      </div>
      )
};
export default UsersPage;