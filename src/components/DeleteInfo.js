import React, {useState} from 'react'
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios';

const DeleteInfo = () => {
    const id = useParams().id
    let history = useHistory()
    const [del, setDel] = useState(false)

    axios.delete(`http://127.0.0.1:8000/api/user-info/${id}/`)
      .then(function (response) {
        console.log(response.data);
        history.push("/list");
        setDel(true)
        
      })
      .catch(function (error) {
        console.log(error);
        setDel(false)
        history.push("/list");

      });

    

    return (
        <div>
            {del ? <div class="alert alert-primary" role="alert">Deleting...............</div>:<div class="alert alert-primary" role="alert">Unable to delete</div>
   
        }            
        </div>
    )
}

export default DeleteInfo
