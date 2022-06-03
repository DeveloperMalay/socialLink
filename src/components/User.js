import React from 'react'

function User({img,name}) {
  return (
    <div className='users'>
        <div className="user">
            <div className="profileimage">
                <img src={img} alt="" />
            </div>
            <div className="name">
                <span>{name}</span>
            </div>
        </div>
    </div>
  )
}

export default User