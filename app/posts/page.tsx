import React from 'react'
import { PostsList } from './ListOfPost'

export default function Posts() {
  return (
    <section className="flex cursor-default flex-col items-start justify-center gap-5 p-10">
      <PostsList />
    </section>
  )
}
