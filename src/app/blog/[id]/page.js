'use client'
import { useParams } from 'next/navigation'
export default function BlogPost() {
  const params = useParams()
  return (
    <>
      <div>
        <h1>Blog Post: {params.id}</h1>
      </div>
    </>
  )
}
