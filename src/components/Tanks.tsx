import assets from '../assets/imges'
import "../scss/pages/_thanks.scss"

const Tanks = () => {
  return (
    <div className='thanks_container'>
        <img src={assets.icon_thank_you} className='thanks_img' alt="" />
        <h1 className='thanks_titel'>Thank you!</h1>
        <p className='thanks_discrption'>Thanks for confirming your subscription! We hope you have fun 
  using our platform. If you ever need support, please feel free 
  to email us at support@loremgaming.com.</p>
    </div>
  )
}

export default Tanks