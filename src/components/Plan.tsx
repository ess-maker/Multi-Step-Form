import { plans } from "../content";
import "../scss/pages/_plan.scss";
import Buttons from "./Buttons";
import { useSelector , useDispatch } from "react-redux";
import  { setchange } from "../form/state";
import { select } from "../form/selected";


const Plan = () => {
  const mainselect = useSelector((state:any) => state.selected)
  const change = useSelector((state:any) => state.changestate.change)
const dispatch = useDispatch()


  const handlePlanSelect = (plan:any) => {
    dispatch(select(plan))
  };

  function switchtoggle() {
    dispatch(setchange(!change))
  }  

  return (
    <div className="plan">
      <h1 className="plan_titel">Select your plan</h1>
      <p className="plan_discption">You have the option of monthly or yearly billing.</p>

      <div className="plan_container">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`plan_box ${mainselect === plan ? "selected" : ""}`}
            onClick={() => handlePlanSelect(plan)}
          >
            <img src={plan.img} alt="plan-img" />
            <p className="plan_titel">{plan.titel}</p>
            <p className="plan_price">{`$/${plan.price}yr`}</p>
            {change && <p className="plan_discount">2 months free</p>}
          </div>
        ))}
      </div>
      <div className="chose_plan">
        <p>Monthly</p>
        <div onClick={switchtoggle} className = {`toggle-switch ${change ? "toggle" : ""}`}></div>
        <p>Yearly</p>
      </div>
      <Buttons to = "/add" />
    </div>
  );
};

export default Plan;