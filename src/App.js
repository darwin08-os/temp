import './App.css';
import './component/custom.css'
import Sidebar from './component/Sidebar';
import Home from './component/Home';
import Profile from './component/Profile';
import Msgs from './component/Msgs';
import Post from './component/Post';
import Feed from './component/Feed';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <div className="content">

      <Router>
        <Sidebar />
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/messages' element={<Msgs />}></Route>
          <Route path='/post' element={<Post />}></Route>
          <Route path='/feed' element={<Feed />}></Route>
        </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
