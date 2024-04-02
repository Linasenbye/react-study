import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/input/button/MyButton";

function App() {
  const [posts, setPosts] = useState([
    {id:1, title:'JavaScript 1', body:'Description'}, 
    {id:2, title:'JavaScript 2', body:'Description'}, 
    {id:3, title:'JavaScript 3', body:'Description'}
  ])  

  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Post Title"/>
        <input type="text" placeholder="Description of the Post"/>
        <MyButton>Make a post</MyButton>
      </form>
      <PostList posts={posts} title="List of posts 1"/>
    </div>
  );
}

export default App;
