import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function stories() {

  const[Stories,setStories]=useState([]);

  let totalStories=0;
  const navigate=useNavigate();
  useEffect(()=>{
    fetch("http://localhost:4000/Story")
    .then(data=>data.json())
    .then(data=>setStories(data))
    .catch(err=>console.log(err))
  },[]);

  return (
    <div className='story d-flex'>
      <div className='d-none'>
        {totalStories=Stories.length}
      </div>
      {Stories.length > 0 ? (
        Stories.map((story)=>(
          <div key={story.id} className='mx-1'onClick={()=>{navigate(`/Story/${story.id}/${totalStories}`)}}>
            <div className='gradient-border'>
              <img src={story.user.profile_pic} alt="dp" className='story-dp rounded-circle '/>
            </div>
          <p className='text-truncate'style={{width:"50px"}}>{story.user.username}</p>
          </div>
        ))
      ) : (
        <p>Loding.....</p>
      )}
    </div>
  )
}

export default stories