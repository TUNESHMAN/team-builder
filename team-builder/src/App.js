import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App(props) {
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
    role: "",
  };
  const [memberForm, setMemberForm] = useState(initialMemberForm);
  const [memberList, setMemberList] = useState(initialMemberList);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add a new member to the member list
    setMemberList([...initialMemberList, { ...memberForm, id: uuid() }]);
    // This can also be re-written as
    // const newMember = {
    //   name: memberForm.name,
    //   email: memberForm.email,
    //   id: uuid(),
    // };

    // const newMemberList = memberList.concat(newMember);
    // setMemberList(newMemberList);
  };

  const handleChange = (e) => {
    setMemberForm({
      ...memberForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="App">
      <Form
        handleChange={handleChange}
        memberForm={memberForm}
        handleSubmit={handleSubmit}
      />
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
