import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Stack from './pages/Stack';
import BubbleSort from './pages/BubbleSort';
import LinkedList from './pages/LL';
import Queue from './pages/Queue';
import LinearSearch from './pages/LinearSearch';
import BinarySearch from './pages/BinarySearchh';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/bubbleSort" element={<BubbleSort />} />
        <Route path="/linkedlist" element={<LinkedList />} />
        <Route path="/queue" element={<Queue />} />
        <Route path='/linearSearch' element={<LinearSearch/>}/>
        <Route path='/binarySearch' element={<BinarySearch/>}/>
      </Routes>
    </Router>
  );
}

export default App;