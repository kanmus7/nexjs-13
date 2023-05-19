import React from 'react'
import { LikeButton } from '@components/LikeButton'

type Posts = {
  userId: number
  id: number
  title: string
  body: string
}

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
    res.json()
  )
}

export const PostsList = async function ListOfPosts() {
  let posts: Array<Posts> = await fetchPosts()

  return (
    <>
      {posts?.slice(0, 5).map((post) => (
        <article key={post?.id}>
          <h2 className="text-2xl font-bold text-blue-500">{post.title}</h2>
          <div className="flex flex-row items-center gap-2">
            <p className=" max-w-lg">{post.body}</p>
            <LikeButton id={post.id} />
          </div>
        </article>
      ))}
    </>
  )
} as unknown as () => JSX.Element
