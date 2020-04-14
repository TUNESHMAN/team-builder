import React, { useEffect } from "react";

function MemberList(props) {
  return (
    <div>
      <div key={props.index}>
        <h4>Name: {props.curr.name}</h4>
        <p>Email: {props.curr.email}</p>
        <p>Role: {props.curr.role}</p>
      </div>
      <button onClick={props.handleEdit}>Edit</button>
    </div>
  );
}

export default MemberList;
