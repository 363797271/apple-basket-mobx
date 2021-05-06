import AppleBasket from './components/AppleBasket'
import { AppleBasketStore, AppleBasketStoreProvider } from './store/AppleBasketStore'

const appleBasketStore = new AppleBasketStore()

function App() {
  return <AppleBasketStoreProvider store={appleBasketStore}>
    <AppleBasket />
  </AppleBasketStoreProvider>
}

export default App;
