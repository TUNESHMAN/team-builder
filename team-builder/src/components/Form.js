import React, { useState } from "react";


function Form(props) {
  const { name, email, role } = props.memberForm;
  return (
    <div>
      <h1>Team Members Form</h1>
      <form onSubmit={props.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            name="name"
            placeholder="Enter your name here"
            onChange={props.handleChange}
          />
        </label>
        <label>
          email:
          <input
            value={email}
            type="email"
            name="email"
            placeholder="Enter your email here"
            onChange={props.handleChange}
          />
        </label>
        <label>
          Role:
          <select
            type="text"
            value={role}
            name="role"
            onChange={props.handleChange}
          >
            <option></option>
            <option>UI</option>
            <option>UX</option>
            <option>Frontend Engineer</option>
            <option>Backend Engineer</option>
            <option>Full-Stack Developer</option>
          </select>
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
