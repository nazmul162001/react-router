import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Post from './components/Post/Post';
import PostDetail from './components/PostDetail/PostDetail';
import Countries from './components/Countries/Countries';
import CountryDetails from './components/CountryDetails/CountryDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/friends" element={<Friends />} ></Route>
        <Route path="/friend/:friendId" element={<FriendDetail />}></Route>
        <Route path="/post" element={<Post></Post>}>
          <Route path= ":postId" element={<PostDetail></PostDetail>}></Route>
        </Route>
        <Route path="/countries" element={<Countries></Countries>}></Route>
        <Route path="/country/:countryName" element={<CountryDetails></CountryDetails>}></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="*" element={<NotFound />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
