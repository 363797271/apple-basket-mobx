import { makeObservable, observable } from "mobx"

class AppleItemStore {
  id = 0
  // 重量（克）
  weight = 0
  // 状态
  isEatUp = false

  constructor(id) {
    this.id = id
    this.weight = Math.floor(Math.random() * 100 + 200)

    makeObservable(this, {
      id: observable,
      weight: observable,
      isEatUp: observable
    })
  }
}

export default AppleItemStore
