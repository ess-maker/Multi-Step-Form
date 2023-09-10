import { Link } from "react-router-dom"
import "../scss/pages/_summery.scss"
import Buttons from "../components/Buttons"
import { useSelector } from 'react-redux';

interface State {
  changestate: any;
  change: boolean;
  selected: {
    price: number;
    titel: string;
  };
  selectedoption: {
    [key: string]: {
      titel: string;
      price: number;
    };
  };
}


const Summery = () => {
  const change = useSelector((state:State) => state.changestate.change)
  const selected = useSelector((state:State) => state.selected)
  const chosenOptions = useSelector((state: State) => state.selectedoption);  
  const choseprice:number[] = Object.values(chosenOptions).map((ele:any):number => ele.price)
  const Total:number   = choseprice + change ? selected.price : selected.price / 10;

  return (
    <div className='Summery'>
        <h1 className='Summery_titel'>Finishing up</h1>
        <p className='Summery_discrption'>Double-check everything looks OK before confirming.</p>

        <div className="Summery_check">
            <div className="Summery_container">
            <div className="Summery_box">
            <h4 className="Summery_chosen">{`${selected.titel}(${change ? "Yearly" : "Monthely" })`} </h4>
            <Link to="/plan" className="Summery_change">Change</Link>
            </div>
            <p className="Summery_price">{`£${ change ? selected.price : selected.price / 10}/ ${change ? 'yr' : 'mo'}`}</p>
            </div>
            {Object.values(chosenOptions).map((ele:any , index:number) => (
            <div key={index} className="Summery_element">
              <h4>{ele.titel}</h4>
              <p>+${ele.price}/mo</p>
            </div>
            ))}
            </div>
            <div className="Total">
            <span className="Summery_Total">{`Total ( per ${change ? " year" : "month" }})`}</span>
            <span className="Total_price">{`+$${Total}`}/mo</span>
            </div>

            <Buttons to={"/thanks"}  />
        </div>

  )
}

export default Summery