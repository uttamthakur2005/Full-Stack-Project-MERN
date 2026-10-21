import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const Feed = () => {
    const [posts, setPosts] = useState([
        {
            _id: '1',
            image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80',
            caption: 'A perfect day for a drive.'
        }
    ])
    // Backend se data lene ke liye iska use kiya gya
    useEffect(()=> {
        axios.get('http://localhost:8000/posts')
        .then((res)=> {
            
            setPosts(res.data.posts)

            
        })
    }, [])

    return (
        <section className='feed-section'>
            <h1>Your Feed</h1>
            {posts.length > 0 ? (
                <div className='feed-posts'>
                    {posts.map((post) => (
                        <article key={post._id} className='post-card'>
                            <img src={post.image} alt='A car on the road' />
                            <p>{post.caption}</p>
                        </article>
                    ))}
                </div>
            ) : (
                <div className='feed-empty-state'>
                    <h2>No posts yet</h2>
                    <p>When you share a post, it will show up here.</p>
                </div>
            )}
        </section>
    )
}

export default Feed
