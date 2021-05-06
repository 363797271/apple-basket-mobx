import { action, computed, makeObservable, observable, runInAction } from 'mobx'
import { createContext, useContext } from 'react'
import AppleItemStore from './AppleItemStore'

class AppleBasketStore {
  list = []
  loading = false

  constructor() {
    makeObservable(this, {
      list: observable,
      loading: observable,
      add: action.bound,
      eat: action.bound,
      unEatUpList: computed,
      eatUpList: computed,
      totalUnEatUpWeight: computed,
      totalEatUpListWeight: computed
    })
  }

  // 摘苹果
  add() {
    if (this.loading) return
    this.loading = true
    setTimeout(() => {
      runInAction(() => {
        this.addImmediately()
      })
    }, 500)
  }

  // 增加苹果
  addImmediately() {
    this.list.push(new AppleItemStore(this.list.length + 1))
    this.loading = false
  }

  // 吃掉苹果
  eat(id) {
    const apple = this.list.find(item => item.id === id)
    apple.isEatUp = true
  }

  // 未吃掉的苹果
  get unEatUpList() {
    return this.list.filter(item => !item.isEatUp)
  }

  // 已吃掉的苹果
  get eatUpList() {
    return this.list.filter(item => item.isEatUp)
  }

  // 当前苹果总重量
  get totalUnEatUpWeight() {
    return this.unEatUpList.reduce((total, prev) => {
      return total += prev.weight
    }, 0)
  }

  // 已吃苹果总重量
  get totalEatUpListWeight() {
    return this.eatUpList.reduce((total, prev) => {
      return total += prev.weight
    }, 0)
  }
}

const AppleBasketStoreContext = createContext()

const AppleBasketStoreProvider = ({store, children}) => {
  return <AppleBasketStoreContext.Provider value={store}>{children}</AppleBasketStoreContext.Provider>
}

const useAppleBasketStoreContext = () => {
  return useContext(AppleBasketStoreContext)
}

export { AppleBasketStore, AppleBasketStoreProvider, useAppleBasketStoreContext }
