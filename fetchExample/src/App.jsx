import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Albums from './pages/Albums';
import Comments from './pages/Comments';
import Photos from './pages/Photos';
import Posts from './pages/Posts';
import Todos from './pages/Todos';
import Users from './pages/Users';
import Header from './components/Header';

function App() {
   

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/albums' element={<Albums/>} />
      <Route path='/comments' element={<Comments/>} />
      <Route path='/photos' element={<Photos/>} />
      <Route path='/posts' element={<Posts/>} />
      <Route path='/todos' element={<Todos/>} />
      <Route path='/users' element={<Users/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
