import React from 'react';

const Title = ({userName,setUserName}) => {
  return (
    <div>
      <div className="title">
        <h1>PhotoBooth</h1>
      <button className="logout" onClick={() => setUserName(null)}>Logout</button>
      </div>
      <h4>{userName}</h4>

    </div>
  )
}

export default Title;