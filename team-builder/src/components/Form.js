import React, { useState } from "react";
import MemberList from "./MemberList";

function Form(props) {
  return (
    <div>
      <h1>Team Members Form</h1>
      <form onSubmit={props.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Enter your name here"
            onChange={props.handleChange}
          />
        </label>
        <label>
          email:
          <input
            type="email"
            name="email"
            placeholder="Enter your email here"
            onChange={props.handleChange}
          />
        </label>
        <label>
          Role:
          <select type="text" name="role" onChange={props.handleChange}>
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
