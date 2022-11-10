import "./formComponent.css";
import logo from "../../images/logo.svg";

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
          <form>
            <h6>Name</h6>
            <input type="text" className="form-control" />
            <h6>Email Address</h6>
            <input type="text" className="form-control" />
            <div className="check__content d-flex">
              <input type="checkbox" id="check" />
              <label htmlFor="check">
                By providing my personal data I agree to be informed about
                AVS4YOU software deals via email.
              </label>
            </div>
            <button type="button">Get Free License</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default FormComponent;
