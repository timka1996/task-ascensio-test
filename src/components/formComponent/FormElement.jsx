import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./formComponent.css";

function FormElement() {
  const [inputValueText, setInputValueText] = useState("");
  const [inputValueEmail, setInputValueEmail] = useState("");
  const [inputValueCheck, setInputValueCheck] = useState(false);

  const [error, setError] = useState(false);

  const onBlur = () => {
    if (!inputValueText || /\S+@\S+\.\S+/.test(inputValueEmail) === false) {
      setError(true);
    } else setError(false);
  };

  return (
    <form>
      <h6>Name</h6>
      <input
        value={inputValueText}
        onChange={(e) => {
          setInputValueText(e.target.value);
          onBlur();
        }}
        type="text"
        className="form-control"
        onBlur={onBlur}
      />
      <p className="text-danger"> {error && "Please enter your name"} </p>
      <h6>Email Address</h6>
      <input
        value={inputValueEmail}
        onChange={(e) => setInputValueEmail(e.target.value)}
        type="email"
        className="form-control"
        onBlur={onBlur}
      />
      <p className="text-danger">
        {error && "Please enter a valid email address"}
      </p>
      <div className="check__content d-flex">
        <input
          checked={inputValueCheck}
          onChange={(e) => {
            setInputValueCheck(e.target.checked);
          }}
          type="checkbox"
          id="check"
        />
        {console.log(inputValueCheck)}
        <label htmlFor="check">
          By providing my personal data I agree to be informed about AVS4YOU
          software deals via email.
        </label>
      </div>
      <p className="text-danger mt-2">
        {error && "Please agree to receive your free license key."}
      </p>
      <button disabled={!inputValueCheck || error} type="button">
        <NavLink to={"./login"}>Get Free License</NavLink>
      </button>
    </form>
  );
}

export default FormElement;
