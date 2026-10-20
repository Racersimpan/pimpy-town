import { useState } from 'react'

function LikeButton() {
  const [liked, setLiked] = useState(false)

  return (
    <button
      className={`like-button ${liked ? 'liked' : ''}`}
      onClick={() => setLiked(!liked)}
      aria-pressed={liked}
    >
      {liked ? '♥ Tack för din like!' : '♡ Gilla Fatima Sushi Bar'}
    </button>
  )
}

export default LikeButton
