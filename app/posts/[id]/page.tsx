import React from 'react'

export default function Post({ params }: any) {
  const { id } = params

  return <div>{id}</div>
}
