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
          <select type="text" name="role" onChange={props.handleChange} value={role}>
            <option ></option>
            <option value="UI">UI</option>
            <option value="UX">UX</option>
            <option value="Frontend develop">Frontend Engineer</option>
            <option value="Backend develop">Backend Engineer</option>
            <option value="Full-Stack Developer">Full-Stack Developer</option>
          </select>
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
