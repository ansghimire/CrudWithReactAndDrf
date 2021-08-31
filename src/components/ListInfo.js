import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
const ListInfo = () => {
    const [list, setList] = useState()
    

    useEffect(() => {
            axios.get(`http://127.0.0.1:8000/api/user-info/`)
                .then(function (response) {
                    // handle success
                    // console.log(response.data);
                    setList(response.data)
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
    },[])



    const display_info = () => {
        let result = []
        let i = 0
        list.forEach(el => result.push(
            <tr key={el.uuid}>
                <td>{i+=1}</td>
                <td>{el.first_name}</td> 
                <td>{el.last_name}</td> 
                <td>{el.email}</td>
                <td>
                <Link  to={'delete/'+el.uuid}>Delete</Link>
                </td>
                <td>
                <Link  to={'Details/'+el.uuid}>Details</Link>
                </td>
                <td>
                <Link  to={'Update/'+el.uuid}>Update</Link>
                </td>
            </tr>  

        ))
        return result
    }


    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action I</th>
                        <th scope="col">Action II</th>
                        <th scope="col">Action III</th>
                    </tr>
                </thead>
                <tbody>
                        {list && display_info()}           
                </tbody>
            </table>
        </div>
    )
}

export default ListInfo
