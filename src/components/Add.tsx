import { add as addItems } from "../content";
import { handeloption } from "../form/option";
import "../scss/pages/_Add.scss";
import Buttons from "./Buttons";
import { useSelector, useDispatch } from "react-redux";

const Add = () => {
  const chosenOptions = useSelector((state: any) => state.selectedoption);
  const dispatch = useDispatch();

  function handeladd(ele: any) {
    dispatch(handeloption(ele))
  }

   return (
    <div className="add">
      <h1 className="add-titel">Pick add-ons</h1>
      <p className="add-discrption">Add-ons help enhance your gaming experience.</p>
      <div className="add_container">
        {addItems.map((ele: any, index: number) => (
          <div
            key={index}
            onClick={() => handeladd({ele})}
            className={`add_box ${index === addItems.length - 1 ? "" : "bottom"} ${
            Object.values(chosenOptions).includes(ele)? "selected" : ""
            }`}
          >
            
            <div>
              <input type="checkbox" name="checkbox" id="" />
              <label htmlFor="checkbox"></label>
            </div>
            <div className="add_box-content">
              <h4 className="add_box_titel">{ele.titel}</h4>
              <p className="add_box_discrption">{ele.discrption}</p>
            </div>
            <p className="add_box_price">+${ele.price}/mo</p>
          </div>
        ))}
      </div>

      <Buttons to={"/summery"} />
    </div>
  );
};

export default Add;