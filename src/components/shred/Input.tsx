import "../../scss/components/_inputs.scss"
const Input = (prop:any) => {
  return (
    <>
    <div className="input-titel">
    <label htmlFor={prop.uniq}>{prop.uniq}</label>
    <p>{prop.error}</p>
    </div>
    <input id={prop.uniq} onChange={prop.onChange} value={prop.value} type={prop.type} placeholder={prop.placeholder} />
    <br />
    </>
  )
}

export default Input