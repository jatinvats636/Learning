import React, { useState } from "react";
import styled from "styled-components";

import Button from "../../UI/Button/Button";
// import "./CourseInput.css";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    text-align: center;
    font-weight: bold;
    display: block;
    color: rgba(255, 242, 251, 0.69);
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  &.invalid input {
    border-color: #ff0000;
    background: #bd434391;
  }
`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) setIsValid(true);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <div class{{Name={`form-control ${!isValid ? "invalid" : ""}`}> */}
      <FormControl className={!isValid && "invalid"}>
        <label>Course Goal</label>
        <input
          // style={{
          //   borderColor: !isValid ? "red" : "black",
          //   background: !isValid ? "rgba(255, 0, 0, 0.2)" : "transparent",
          // }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </FormControl>
      {/* </div> */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
