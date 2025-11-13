'use client'

// This is a client component to fetch and display a blog post based on the dynamic route parameter 'id'.

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function BlogPost() {
  const params = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!params.id) return

    setLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch post')
        return res.json()
      })
      .then((data) => {
        setPost(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [params.id])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  if (!post) return <p>Post not found.</p>

  return (
    <>
      <h1>Blog Post {params.id}</h1>
      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
      <p>{post.body}</p>
    </>
  )
}
