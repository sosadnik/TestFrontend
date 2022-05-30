import { useState, useEffect } from "react";

function Input(props) {
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    age: "",
  });
  const [success, setSuccess] = useState(false);
  const buttonDisabled = Object.values(errors).filter((x) => x).length;

  const submit = (e) => {
    e.preventDefault();
    if (!errors.age && !errors.name) {
      setSuccess(props.onSubmit({ name, age }));
    }
  };

  const validateName = (text) => {
    let formIsValid = true;
    const nameReg = /^[a-zA-Z]+$/;
    if (!text) {
      formIsValid = false;
      setErrors({ name: "Cannot be empty" });
    }

    if (typeof text !== "undefined") {
      if (!nameReg.test(text)) {
        formIsValid = false;
        setErrors({ name: "Only letters" });
      }
    }
    return formIsValid;
  };

  const validateAge = (text) => {
    let formIsValid = true;
    const ageReg = /\-?\d*\.?\d{1,2}/;
    if (typeof text !== "undefined") {
      if (!ageReg.test(text)) {
        formIsValid = false;
        setErrors({ age: "Only numbers" });
      }

      if (age > 150 || age < 0) {
        formIsValid = false;
        setErrors({ age: "A value between 0 and 150" });
      }
    }

    return formIsValid;
  };

  useEffect(() => {
    if (validateName(name)) {
      setErrors({ ...errors, name: "" });
    }
  }, [name]);

  useEffect(() => {
    if (validateAge(age)) {
      setErrors({ ...errors, age: "" });
    }
  }, [age]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (success) {
        setAge("");
        setName("");
        setSuccess(false);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [success]);

  return (
    <form onSubmit={submit}>
      {success ? <div className="alert alert-success">Saved!</div> : null}
      <div className="container">
        <div className="form-group text-left">
          <label>Name</label>
          <input
            type="fname"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`form-control ${
              errors.name ? "is-invalid" : "is-valid"
            }`}
          />
          <div className="invalid-feedback">{errors.name}</div>
        </div>
        <div className="form-group text-left">
          <label>Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className={`form-control ${errors.age ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.age}</div>
        </div>
        <button className="btn btn-primary" disabled={buttonDisabled}>
          Save
        </button>
      </div>
    </form>
  );
}

export default Input;
