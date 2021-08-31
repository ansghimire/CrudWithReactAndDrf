import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Update = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [bio, setBio] = useState('')
    const [mssg, setMssg] = useState(false)
    const id = useParams().id

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/user-info/${id}/`)
            .then(function (response) {
                // console.log(response.data);
                let res = response.data
                setFirstName(res.first_name)
                setLastName(res.last_name)
                setEmail(res.email)
                setBio(res.bio)

            })
            .catch(function (error) {
                console.log(error);

            });

    }, [id,])

    const update_info = (e) => {
        e.preventDefault()
        axios.put(`http://127.0.0.1:8000/api/user-info/${id}/`,{
            first_name: firstName,
            last_name: lastName,
            email:email,
            bio: bio
        })
        .then(function (response) {
            // console.log(response.data);
            if(response.data){
                setMssg('Succesfully updated')
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }


    return (
        <form className="container mt-4" method="post" onSubmit={update_info} >
            { mssg && mssg }
            {mssg && setInterval(() => {
                setMssg('')
            }, 1500)}
            <h1>Update info </h1>
            <div className="mb-3">
                <label htmlFor="fname" className="form-label">First Name</label>
                <input type="text" className="form-control" id="fname" name="firstname" value={firstName}
                    onChange={e => setFirstName(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="lname" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="lname" name="lastname" value={lastName}
                    onChange={e => setLastName(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name="email" value={email}
                    onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="bio" className="form-label">bio</label>
                <textarea className="form-control" id="bio" rows="7" name="bio" value={bio}
                    onChange={e => setBio(e.target.value)} >
                </textarea>
            </div>
            <button type="submit" className="btn btn-primary">Update</button >
        </form>

    )
}

export default Update
