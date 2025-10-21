import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setEvents } from './redux/eventsSlice';
import Home from './pages/Home';
import Confirm from './pages/Confirm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  const dispatch = useDispatch();

  const events = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      location: "New York City, NY",
      price: "$120",
      description: "Experience the vibrant culture and nightlife of New York City with this exclusive event."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
      location: "Los Angeles, CA",
      price: "$95",
      description: "Join us in sunny Los Angeles for a day of fun, food, and entertainment."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
      location: "Chicago, IL",
      price: "$110",
      description: "Discover the best of Chicago with live music and local cuisine."
    },
    {
      id: 4,
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.x-ibkw-Kpzz3LV8WfR0W7QHaEo%3Fcb%3D12%26pid%3DApi&f=1&ipt=ef3ea9a83db72e944008d965a9d4ddd5c6d0d537c0d93c03a0717343dab3bfd0&ipo=images",
      location: "Miami, FL",
      price: "$130",
      description: "Enjoy the beaches and vibrant nightlife of Miami at this special event."
    }
  ];

  useEffect(() => {
    dispatch(setEvents(events));
  }, [dispatch]);

  return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/confirm" element={<Confirm />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
