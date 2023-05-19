'use client'
import React, { useState } from 'react'

interface LikeButtonProps {
  id: number
}

export function LikeButton({ id }: LikeButtonProps) {
  const [liked, setLiked] = useState(false)
  const handleClick = () => {
    setLiked(!liked)
  }
  return <button onClick={handleClick}>{liked ? '🖤' : '🤍'}</button>
}
