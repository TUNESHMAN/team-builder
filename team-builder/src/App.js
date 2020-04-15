import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import MemberList from "./components/MemberList";

function App() {
  const initialMemberList = [
    {
      id: uuid(),
      name: "Alex",
      email: "alex@lambda.com",
      role: "Frontend develop",
    },
    {
      id: uuid(),
      name: "Gabe",
      email: "gabe@lambda.com",
      role: "Backend develop",
    },
    {
      id: uuid(),
      name: "Tom",
      email: "tom@lambda.com",
      role: "Full-Stack Developer",
    },
  ];

  const initialMemberForm = {
    name: "",
    email: "",
  };
  const [memberForm, setMemberForm] = useState(initialMemberForm);
  const [memberList, setMemberList] = useState(initialMemberList);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <Form />
      <h2>Team Members</h2>
      {initialMemberList.map((member) => (
        <h5>
          My name is {member.name}, I am a {member.role}, you can reach me on{" "}
          {member.email}
        </h5>
      ))}
    </div>
  );
}

export default App;
