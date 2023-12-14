import React, { useRef, useState, useEffect } from "react";
// import "../index.css"

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  // const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const isValid = name.trim() !== "";
  const inputIsInvalid = !isValid && isTouched;
  const submitHandler = (event) => {
    event.preventDefault();
    setIsTouched(true);
    
    // if (name.trim() === "") {
      //   setIsValid(false);
      // console.log(isValid,isTouched);
    //   return;
    // }

    if(!isValid) {
      return;
    }
    // setIsValid(true);
    console.log(name);
    // console.log(isValid,isTouched);
    setName("");
    setIsTouched(false);
  };
  const nameChangeHandler = (e) => {
    setName(e.target.value);
    // if (name.trim() !== "") setIsValid(true);
  };
  const nameBlurHandler = (e) => {
    setIsTouched(true);
    // if (name.trim() === "") {
    //   setIsValid(false);
      // console.log(isValid,isTouched);
    //   return;
    // }
  };

  const inputClasses = inputIsInvalid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={inputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          value={name}
          onBlur={nameBlurHandler}
        />
      </div>
      {inputIsInvalid && (
        <p className="error-text">The input field must not be empty!</p>
      )}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
