import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { PostCard } from './PostCard'

export const PostList = () => {
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([])
    const [searchQuery, setSearchQuery] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
            console.log(res.data)
            setPosts(res.data)
        }
        fetchData()
    }, [])

    const filterPost = posts.filter((posts, i) => (posts.title.includes(searchQuery)))

    const handleSortAsc = () => {
        let sorted = [...filterPost].sort((a, b) => a.userId - b.userId)
        setPosts(sorted)
    }

    const handleSortDsc = () => {
        let sorted = [...filterPost].sort((a, b) => b.userId - a.userId)
        setPosts(sorted)
    }

    const handleSortAscAlbha = () => {
        let sorted = [...filterPost].sort((a, b) => a.title.localeCompare(b.title))
        setPosts(sorted)
    }

    const handleSortDscAlbha = () => {
        let sorted = [...filterPost].sort((a, b) => b.title.localeCompare(a.title))
        setPosts(sorted)
    }




    return (
        <div >
            <div>
                <input placeholder='search here for post' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

                <button onClick={handleSortAsc}>sort Asc (1-100)</button>
                <button onClick={handleSortDsc}>sort Dsc (100-1)</button>
                <button onClick={handleSortAscAlbha}>sort Asc (A-Z)</button>
                <button onClick={handleSortDscAlbha}>sort Dsc (Z-A)</button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
                {filterPost ?

                    filterPost.map((posts, i) => (
                        <PostCard key={posts.id} posts={posts} />
                    )) : <p>no post is available</p>}
            </div>

        </div>
    )
}