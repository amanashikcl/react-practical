import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import store from './redux/Store.js'
import { Provider } from 'react-redux'
import { UserContextProvider } from './context/UserContext.jsx'
import { ProductContextProvider } from './context/ProductContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <ProductContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ProductContextProvider>
    </UserContextProvider>
  </StrictMode>
)