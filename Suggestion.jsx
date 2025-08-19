import React, { useEffect, useState } from 'react'

function Suggestion() {
  const [profile, setProfile] = useState(null);
  const [suggestion, setSuggestion] = useState([]);
  const [followingIds, setFollowingIds] = useState(new Set());

  useEffect(() => {
    fetch("http://localhost:4000/profile")
      .then(data => data.json())
      .then(data => setProfile(data))
      .catch(err => console.log(err))

    fetch("http://localhost:4000/sugesstion")
      .then(data => data.json())
      .then(data => setSuggestion(data))
      .catch(err => console.log(err))

  }, []);
  const handleFollow = (id) => {
    setFollowingIds(prevIds => new Set(prevIds).add(id));
  };

  return (
    <div>
      <div className='suggestion w-75 m-4'>
        {profile ?
          <div className='d-flex align-items-center'>
            <img className="dp rounded-circle" src={profile.profile_pic} alt={profile.username} />
            <h5 className='ms-2 mb-0'>{profile.username}</h5> 
            <small className='ms-auto text-primary fw-bold' style={{ cursor: 'pointer' }}>Switch</small>
          </div>
          : <p>Loading...</p>
        }
      </div>
      <div className='d-flex w-75 m-4'>
        <span className='text-secondary'>Suggestion for you</span>
        <b className='ms-auto'>See All</b>
      </div>
      {suggestion.length > 0 ? (
        <div>
          {suggestion.map((sugg) => (
            <div className="d-flex align-items-center w-75 m-4" key={sugg.id}>
                <img className="dp rounded-circle" src={sugg.profile_pic} alt={sugg.username} />
                <h5 className='ms-2 mb-0'>{sugg.username}</h5>
                {followingIds.has(sugg.id) ? (
                  <p className='ms-auto text-primary fw-bold mb-0'>Following</p>
                ) : (
                  <p
                    className='ms-auto text-primary fw-bold mb-0'
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleFollow(sugg.id)}
                  >
                    Follow
                  </p>
                )}
            </div>
          ))}
        </div>
      ) : (
        <div className='w-75 m-4'>
            <p>Loading......</p>
        </div>
      )}
    </div>
  )
}

export default Suggestion;