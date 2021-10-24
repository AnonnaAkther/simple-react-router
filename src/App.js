import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Friend from './components/Friend/Friend';
import Header from './components/Header/Header';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Culture from './components/Culture/Culture';
import PostDetail from './components/PostDetail/PostDetail';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/friends">
          <Friends></Friends>
        </Route>
        <Route path="/friend/:friendId">
          <FriendDetail></FriendDetail>
        </Route>
        <Route path="/post/:postId">
          <PostDetail></PostDetail>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
        <Route exact path="/about/culture">
          <Culture></Culture>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
