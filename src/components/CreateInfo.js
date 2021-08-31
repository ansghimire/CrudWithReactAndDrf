import React,{useState} from 'react'
import axios from 'axios'
const CreateInfo = () => {

const [fname, setfName] = useState('')
const [lname, setlName] = useState('')
const [email, setEmail] = useState('')
const [bio, setBio] = useState('')
const [mssg, setMssg] = useState(false)
 


    const send_data = (val) => {
        // console.log(val.fname)
        // console.log(val.lname)
        // console.log(val.email)

        axios.post('http://127.0.0.1:8000/api/user-info/', {
            first_name: val.fname,
            last_name: val.lname,
            email:val.email,
            bio: val.bio
          })
          .then(function (response) {
            // console.log(response.data);
            if(response.data){
                setMssg('Succesfully created')
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const onSubmit =(e) =>{
        e.preventDefault()
        if(!fname){
            alert("First name should not be empty")
            return ''
        }
        if(!lname){
            alert('Last name should not be empty')
            return ''
        }
        if(!email){
            alert('Email should not be empty')
            return ''
        }
        if(!bio){
            alert("bio should not be empty")
            return ''
        }
        
        send_data({fname, lname, email, bio})
        

    }


    return (
    
        <form className="container mt-4" method="post" onSubmit={onSubmit}>
            { mssg }
            {mssg && setInterval(() => {
                setMssg('')
            }, 1500)}
             <h1>Create User</h1>
            <div className="mb-3">
                <label htmlFor="fname" className="form-label">First Name</label>
                <input type="text" className="form-control" id="fname" name="firstname" value={fname} onChange={e=> setfName(e.target.value)}  />
            </div>
            <div className="mb-3">
                <label htmlFor="lname" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="lname" name="lastname" value={lname} onChange={e=> setlName(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name="email" value={email}  onChange={e=> setEmail(e.target.value)}  />
            </div>
            <div className="mb-3">
                <label htmlFor="bio" className="form-label">bio</label>
                <textarea className="form-control" id="bio" rows="7" name="bio" value={bio}  onChange={e=> setBio(e.target.value)}>
                </textarea>
            </div>
            <button type="submit"  className="btn btn-primary">Create</button >
        </form>
    )
}

export default CreateInfo

