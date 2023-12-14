import InputHook from "../Hooks/input-hooks";

const BasicForm = (props) => {
  const {value:first,isValid:firstIsValid,hasError:firstHasError,changeHandler:firstChangeHandler,blurHandler:firstBlurHandler,reset:firstReset} = InputHook(value => value.trim() !== '');
  const {value:last,isValid:lastIsValid,hasError:lastHasError,changeHandler:lastChangeHandler,blurHandler:lastBlurHandler,reset:lastReset} = InputHook(value => value.trim() !== '');
  const {value:email,isValid:emailIsValid,hasError:emailHasError,changeHandler:emailChangeHandler,blurHandler:emailBlurHandler,reset:emailReset} = InputHook(value => value.includes('@'));

  let formIsValid = false;
  if(firstIsValid && lastIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(first, last, email);

    firstReset();
    lastReset();
    emailReset();

  }
  const firstInputClasses = firstHasError ? "form-control invalid" : "form-control";
  const lastInputClasses = lastHasError ? "form-control invalid" : "form-control";
  const emailInputClasses = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstInputClasses}>
          <label htmlFor="name-first">First Name</label>
          <input
            type="text"
            id="name-first"
            onChange={firstChangeHandler}
            onBlur={firstBlurHandler}
            value={first}
          />
          {firstHasError && (
            <p className="error-text">The input field must not be empty!</p>
          )}
        </div>
        <div className={lastInputClasses}>
          <label htmlFor="name-last">Last Name</label>
          <input
            type="text"
            id="name-last"
            onChange={lastChangeHandler}
            onBlur={lastBlurHandler}
            value={last}
          />
          {lastHasError && (
            <p className="error-text">The input field must not be empty!</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={email}
        />
        {emailHasError && (
          <p className="error-text">The input field must not be empty!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
