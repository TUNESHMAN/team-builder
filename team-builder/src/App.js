import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import MemberList from "./components/MemberList";

function App() {
  const initialMemberList = [
    {
      id: 1,
      name: "Alex",
      email: "alex@lambda.com",
      role: "Frontend develop",
    },
    {
      id: 2,
      name: "Gabe",
      email: "gabe@lambda.com",
      role: "Backend develop",
    },
    {
      id: 3,
      name: "Tom",
      email: "tom@lambda.com",
      role: "Full-Stack Developer",
    },
  ];

  const initialMemberForm = {
    name: "",
    email: "",
    role: "",
  };
  const [memberForm, setMemberForm] = useState(initialMemberForm);
  const [memberList, setMemberList] = useState(initialMemberList);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setMemberForm({
      ...memberForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="App">
      <Form handleChange={handleChange}/>
      <h2>Team Members</h2>
      {initialMemberList.map((member) => (
        <h5>
          My name is {member.name}, I am a {member.role}, you can reach me on 
          {member.email}
          <button>Edit</button>
        </h5>
      
      ))}
    </div>
  );
}

export default App;
