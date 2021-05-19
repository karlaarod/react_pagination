import React from 'react'

export const Posts = ({posts, loading}) => {

    if(loading){
        return <h2>Loading...</h2>
    }

    return (
        <div className='posts-list'>
            {posts.map(({id, title, body})=>(
                <span key={id}>
                <h3>{title}</h3>
                <p>{body}</p>
                </span>

            ))}
            
        </div>
    )
}

