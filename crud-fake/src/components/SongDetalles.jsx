import React from 'react'
import SongArtist from './SongArtist'
import SongLyrics from './SongLyrics'
import Message from './Message'

const SongDetalles = ({search, lyrics, bio}) => {
    if(!lyrics || !bio) return null;
  return (
    <>
        {lyrics.error || lyrics.name === "AbortError" ? 
        (<Message msg={`Error no existe la cancion ${search.song} `} bgColor="#dc3545"/>) :( <SongLyrics/>)}

        {bio.artists ? (<SongArtist/> ):(<Message msg={`Error no existe ese artista ${search.artist} `} bgColor="#dc3545" /> )}

    </>
  )
}

export default SongDetalles