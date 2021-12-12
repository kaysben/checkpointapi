import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Details() {
    let {id}= useParams ();
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then ((res)=>{setUser(res.data);setLoading(false);})
        .catch((err)=>console.log(err));
        
       
    }, [] )
    return (
        <div>
            {loading ? (<img src="https://c.tenor.com/rec5dlPBK2cAAAAd/mr-bean-waiting.gif" alt="loading"  />):(
                <div>
            <h1>
                 {user.address.street} </h1>
                 
            <h1>    {user.email} </h1>
            </div>
            )}    
           
            
        </div>
    )
}

export default Details
