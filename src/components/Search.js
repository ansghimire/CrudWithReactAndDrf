import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router'
import axios from 'axios'
import { Link } from 'react-router-dom'



const Search = () => {
    const [result, setResult] = useState()
    const search = useLocation().search;
    let name = new URLSearchParams(search).get('search');

    if(name === ''){
        name = null
    }
  
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/user-info?search=${name}`)
        .then(function (response) {
        console.log(response.data)
        setResult(response.data)
    
        })
        .catch(function (error) {
            console.log(error);
    
        });
          
       }, [name])
  
   
   
   const display_info = () => {
    // e.preventDefault()
    console.log('display method called')
    let list =  []
    let i = 0
    result.forEach(el => list.push(
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
    return list
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

                {/* <tr>
                    <td>1</td>
                    <td>anish</td> 
                    <td>ghimire</td> 
                    <td>ans@gm.com</td>
                </tr> */}
                
                {result ? display_info(): <tr><td>Null</td></tr>}     
                </tbody>
            </table>
        </div>
    )
}

export default Search
