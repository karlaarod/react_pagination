import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";


export const Posts = ({ posts, currentPage, postsPerPage, loading }) => {
  //get current posts
  const lastPost = currentPage * postsPerPage;
  const firstPost = lastPost - postsPerPage;
  const currentPosts = posts.slice(firstPost, lastPost);

  if (loading) {
    return <CircularProgress className='loading-icon'/> ;
  }

  return (
    <div className="posts-list">
      {currentPosts.map(({ id, title, body }) => (
        <span key={id}>
          <Grid
            container
            className='single-post'
            direction="column"
            justify="center"
            alignItems="flex-start"
          >
            <h3>{title}</h3>
            <p>{body}</p>
          </Grid>
        </span>
      ))}
    </div>
  );
};
