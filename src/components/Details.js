import React, {useState, useEffect} from 'react'
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios';

const Details = () => {
    const id = useParams().id
    let history = useHistory()
    const [detail, setDetail] = useState([])

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/user-info/${id}/`)
        .then(function (response) {
          console.log(response.data);
          setDetail(response.data)
        })
        .catch(function (error) {
          console.log(error);
          history.push("/list");
        });
      
    }, [id,history])
   
    

    return (
        <div class="container mt-3">
           <ul>
               <li><h2>First Name:</h2> {detail.first_name}</li>
               <li><h2>Last Name:</h2> {detail.last_name}</li>
               <li><h2>Email </h2>: {detail.email}</li>
               <li><h2>Bio:</h2> {detail.bio}</li>
                

           </ul>
   
                    
        </div>
    )
}

export default Details
