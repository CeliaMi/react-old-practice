import React from 'react'

const SongLyrics = ({title, lyrics}) => {
  return (
    <div>
      <h3>{title}</h3>
      <blockquote>{lyrics}</blockquote>
    </div>
  )
}

export default SongLyrics