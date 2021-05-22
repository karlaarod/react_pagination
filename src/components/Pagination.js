import React from "react";
import Pagination from "@material-ui/lab/Pagination";

const PaginationCount = ({postsPerPage, posts, setCurrentPage}) => {
  const totalPosts = posts.length;
  let totalNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    totalNumber.push(i);
  }

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <nav className="pagination-nav">
      <Pagination
       count={totalNumber.length}
       color='primary'
        onChange={handleChange} />
    </nav>
  );
};

export default PaginationCount;
