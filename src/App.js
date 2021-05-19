/* eslint-disable */

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Pagination from './components/Pagination';
import { fetchPost } from './api';
import { Posts } from './components/Posts';

function App() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading]= useState(false);
  const [currentPage, setCurrentPage]= useState(1)
  const [postPerPage, setPostsPerPage]= useState(10)

  useEffect(()=>{
    setLoading(true);
    
    const fetchPost = async() =>{ 
      const res= await axios.get('https://jsonplaceholder.typicode.com/posts') 
      setPosts(res.data);
      setLoading(false);

    }
    fetchPost()
  }, [])

//get current post
  const lastPost= currentPage * postPerPage;
  const firstPost= lastPost - postPerPage;
  const currentPosts = posts.slice(firstPost, lastPost);

  return (
    <div className="App">
      <Pagination/>
      <Posts
      posts ={posts}
      loading= {loading}
      />
    </div>
  );
}

export default App;
