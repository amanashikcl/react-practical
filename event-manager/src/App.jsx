import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/Home';
import Confirm from './pages/Confirm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/confirm" element={<Confirm />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
