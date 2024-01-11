import React from 'react'

const SongArtist = ({artist}) => {
  return (
    <>
      <section id={artist.idArtist}>
        <h3>{artist.strArtist}</h3>
        <img src={artist.strArtistThumb} alt = {artist.strArtist}/>
        <p>{artist.intBornYear} - {artist.intDiedYear || "presente"}</p>
        <p>{artist.strCountry}</p>
        <p>{artist.strGenre}</p>
        <p>{artist.strBiographyES}</p>
        <a href={`https://${artist.strWebsite}`}>WebSite</a>
      </section>
    </>
  )
}

export default SongArtist