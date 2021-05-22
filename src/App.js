/* eslint-disable */

import React, { useState, useEffect } from "react";
import axios from "axios";
import PaginationCount from "./components/Pagination";
import { Posts } from "./components/Posts";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);

      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPost();
  }, []);

  return (
    <div className="App">
      <h1>Blog</h1>
      <PaginationCount
        postsPerPage={postsPerPage}
        posts={posts}
        setCurrentPage={setCurrentPage}
      />
      <Posts 
      posts={posts} 
      currentPage= {currentPage}
      postsPerPage = {postsPerPage}
      loading={loading} />
    </div>
  );
}

export default App;
