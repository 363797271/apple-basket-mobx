import { observer } from 'mobx-react-lite'
import { useAppleBasketStoreContext } from '../store/AppleBasketStore'
import AppleItem from './AppleItem'

const AppleBasket = () => {
  const appleBasketStoreContext = useAppleBasketStoreContext()
  const { eatUpList, unEatUpList, loading, add, totalUnEatUpWeight, totalEatUpListWeight } = appleBasketStoreContext

  return (
    <div className="appleBusket">
      <div className="title">苹果篮子</div>

      <div className="stats">
        <div className="section">
          <div className="head">当前</div>
          <div className="content">
            {unEatUpList.length}个苹果，{totalUnEatUpWeight}克
          </div>
        </div>
        <div className="section">
          <div className="head">已吃掉</div>
          <div className="content">
            {eatUpList.length}个苹果，{totalEatUpListWeight}克
          </div>
        </div>
      </div>

      <div className="appleList">
      {
        unEatUpList.length > 0 ? (
          unEatUpList.map(item => (
            <AppleItem weight={item.weight} id={item.id} key={item.id} />
          ))
        ) : (
          <div className="empty-tip" key="empty">苹果篮子空空如也</div>
        )
      }
      </div>

      <div className="btn-div">
        <button className={loading?'disabled':''} onClick={add}>
          {loading?'正在采摘...':'摘苹果'}
        </button>
      </div>
    </div>
  )
}

export default observer(AppleBasket)
