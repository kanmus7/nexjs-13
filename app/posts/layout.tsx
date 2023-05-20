import React from 'react'

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex cursor-default flex-col items-center justify-center gap-5">
      {children}
    </section>
  )
}
