import React from 'react'
import { Posts } from '../types'
import Link from 'next/link'

const fetchSinglePost = (id: number | string): Promise<Posts> => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
    res.json()
  )
}

export default async function PostLayout({ params, children }: any) {
  const { id } = params
  const singlePost = await fetchSinglePost(id)

  return (
    <article className="flex flex-col items-center justify-center gap-2 p-10">
      <h1 className="text-center text-2xl font-bold text-blue-500">
        {singlePost.title}
      </h1>
      <p className=" max-w-lg text-center">{singlePost.body}</p>
      <Link
        className="text-2xl font-bold text-black  hover:text-blue-400"
        href={`/posts/${id}/comments`}
      >
        Comments
      </Link>
      {children}
    </article>
  )
}
