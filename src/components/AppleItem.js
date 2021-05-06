import appleImg from '../images/apple.png'
import { useAppleBasketStoreContext } from '../store/AppleBasketStore'

const AppleItem = (props) => {
  const appleBasketStoreContext = useAppleBasketStoreContext()
  const { eat } = appleBasketStoreContext
  const { id, weight } = props
  return (
    <div className="appleItem">
      <div className="apple">
        <img src={appleImg} alt="" />
      </div>
      <div className="info">
        <div className="name">红苹果 - {id}号</div>
        <div className="weight">{weight}克</div>
      </div>
      <div className="btn-div">
        <button onClick={() => eat(id)}> 吃掉 </button>
      </div>
    </div>
  )
}

export default AppleItem
