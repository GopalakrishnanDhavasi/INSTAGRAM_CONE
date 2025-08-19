import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react';
function Profile() {

    const [profile, setProfile] = useState(null);

      useEffect(() => {
        axios.get("http://localhost:4000/profile")
          .then(data => {setProfile(data.data);console.log(data)})
    
      }, []);

      function HandleOnChange(e){
        setProfile(prev=>({
            ...prev,
            [e.target.name]: e.target.value
        }))
      }
      async function handleUpdate() {
        axios.put("http://localhost:4000/profile", profile)
            .then(console.log("Updated"))
            .catch(err => console.log(err));
    }

  return (
    <div className='m-5'>
        {profile ?(
            <div>
                <img src={profile.profile_pic} className="profile rounded-circle" />
                <h5>{profile.username}</h5>
                <input type="text"
                        value={profile.username}
                        name='username'
                        className='form-control my-4'
                        onChange={HandleOnChange}
                />
                <input type='text'
                        name="profile_pic" value={profile.profile_pic} 
                        className='form-control my-4' 
                        onChange={HandleOnChange}
                    />

                <div>
                    <button className='btn btn-primary my-2' onClick={handleUpdate}>
                        Update
                    </button>
                </div>
            </div>
        ):(
            <div>loding....</div>
        )}
    </div>
  )
}

export default Profile