import React from 'react';

function UserCard(props) {
  const { name, email, onClick } = props;

  return (
    <div className="card">
      <div className="card-body">
        <h2>{name}</h2>
        <p>Email: {email}</p>
      </div>
      <div className="card-footer">
        <button className="btn btn-danger" onClick={onClick}>Delete User</button>
      </div>
    </div>
  );
}

export default UserCard;
