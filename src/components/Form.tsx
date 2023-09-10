import { Outlet, useLocation } from "react-router-dom";
import { steps } from "../content";
import "../scss/pages/_formapp.scss";

const Form = (): JSX.Element => {
  const location = useLocation();

  return (
    <div className="form_app">
      <div className="form_steps">
        {steps.map((step, index) => (
          <li
            key={index}
            className={`form_step`}
          >
            <span className={`form_number${location.pathname === step.path ? " active" : ""}`}
>{1 + index}</span>
            <div className="form_content">
              <p className="form-titel">Step {1 + index}</p>
              <h1 className="form-discrption">{step.discrption}</h1>
            </div>
          </li>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Form;