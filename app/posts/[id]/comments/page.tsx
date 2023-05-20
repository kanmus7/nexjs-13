import React from 'react'
import { Comments } from '../../types'

const fetchPostComment = (id: number | string): Promise<Comments[]> => {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  ).then((res) => res.json())
}

export default async function Comments({ params }: any) {
  const { id } = params
  const comments = await fetchPostComment(id)

  return (
    <ul className="grid grid-cols-3 gap-10 p-10 text-center">
      {comments.map((comment) => (
        <li className="flex flex-col items-center gap-1" key={comment.id}>
          <h2 className="text-2xl font-bold">{comment.name}</h2>
          <h3>{comment.email}</h3>
          <p className="w-[500px]">{comment.body}</p>
        </li>
      ))}
    </ul>
  )
}
