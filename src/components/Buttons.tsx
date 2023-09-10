import { Link } from "react-router-dom"
import "../scss/components/_buttons.scss"
import { useNavigate  } from 'react-router-dom';
import { useLocation } from "react-router-dom";




const buttons = ({to } : {to: string }) => {
  const loction =  useLocation()
  const navigate  = useNavigate ();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className={`buttons`}>
    <Link to={""} className="back" onClick={handleGoBack} >Go Back</Link>
    <Link to={to}><input className={`next ${loction.pathname == "/summery" ? "bg-confirem" : "bg-next"}`} type="submit" value={loction.pathname == "/summery" ? "confirem" : "Next Step"}/></Link>

      
      </div>
  )
}

export default buttons