import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import MemberList from "./components/MemberList";

function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [memberDetails, setMemberDetails] = useState({
    name: "",
    email: "",
    role: "",
  });
  const [memberToEdit, setMemberToEdit] = useState({});

  const handleEdit = (e) => {
    setMemberToEdit({
      ...memberToEdit,
      [e.target.name]: e.target.value,
    });
    console.log(memberToEdit);
  };

  const handleChange = (e) => {
    setMemberDetails({
      ...memberDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTeamMembers(teamMembers.concat(memberDetails));

    e.target.reset();
  };

  return (
    <div className="App">
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        memberToEdit={memberToEdit}
      />
      <h2>Team Members</h2>
      {teamMembers.length === 0 ? (
        <div>
          <p>There are no members in this team.</p>
        </div>
      ) : (
        teamMembers.map((curr, index) => {
          return <MemberList key={index} curr={curr}  handleEdit={handleEdit}/>;
        })
      )}
    </div>
  );
}

export default App;
