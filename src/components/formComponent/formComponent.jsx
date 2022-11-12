import "./formComponent.css";
import logo from "../../images/logo.svg";
import FormElement from "./FormElement";

function FormComponent() {
  return (
    <div className="form__component col-6 d-flex">
      <aside className="frame"></aside>
      <section className="content">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="form__content">
          <div className="form__text">
            <h1>Get started for free</h1>
            <h6>
              Please, fill in the form and get a free license key for your PC
            </h6>
          </div>
          <FormElement />
        </div>
      </section>
    </div>
  );
}

export default FormComponent;
