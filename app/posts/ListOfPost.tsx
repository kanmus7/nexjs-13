import React from 'react'
import Link from 'next/link'

import { LikeButton } from '@components/LikeButton'
import { Posts } from './types'

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
        <article
          key={post?.id}
          className="p-4 hover:rounded-lg hover:bg-gray-200"
        >
          <Link
            className="flex flex-col gap-2"
            href={'/posts/[id]'}
            as={`/posts/${post.id}`}
          >
            <h2 className="text-center text-2xl font-bold text-blue-500">
              {post.title}
            </h2>
            <div className="flex-column flex justify-center gap-2">
              <p className=" max-w-lg text-center">{post.body}</p>
              <LikeButton id={post.id} />
            </div>
          </Link>
        </article>
      ))}
    </>
  )
} as unknown as () => JSX.Element
