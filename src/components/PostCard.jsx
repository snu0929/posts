import React from 'react'

export const PostCard = ({ posts }) => {
    return (
        <div style={{ margin: "10px", padding: "10px", border: "2px solid black", textAlign: "center", background: "grey" }}>
            <h2>{posts.id}</h2>
            <h2>{posts.title}</h2>
            <p>{posts.body}</p>
        </div>
    )
}
