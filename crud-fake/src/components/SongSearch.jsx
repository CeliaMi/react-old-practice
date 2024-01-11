import React, { useState, useEffect } from 'react';
import SongForm from './SongForm';
import Loader from './Loader';
import { helpHttp } from '../helpers/helpHttp';
import SongDetails from './SongDetails';



const SongSearch = () => {

    //1️⃣.Utilizamos el hook useState para controlar el estado de cada elemento que va a cambiar de nuestros componentes

    const [search, setSearch] = useState(null)
    const [lyric, setLyric] = useState(null)
    const [bio, setBio] = useState(null)
    const [loading, setLoading] = useState(false)

    //4️⃣.utilizamos el hook useEffect

    useEffect(() => {
      if(search === null ) return;

      const fetchData = async() =>{
        const {artist, song} = search;
        let artistUrl=`https://theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
        let songUrl=`https://api.lyrics.ovh/v1/${artist}/${song}`
        console.log(artistUrl, songUrl)

        setLoading(true);
        

        const[artistRes, songRes] = await Promise.all([
            helpHttp().get(artistUrl),
            helpHttp().get(songUrl),
        ]);

        console.log(artistRes, songRes);

        setBio(artistRes);
        setLyric(songRes);
        setLoading(false);

        };
      fetchData();
    }, [search])
    


    //2️⃣.Creamos un handle para controlar cuando se cargan los datos del formulario y que pueda recibirlos de su hijo SongForm por eso si ves el componente SongForm handleSearch esta pasada como prop, Cuando los recibe se los pasa a su estado search

        //pasos: <SongForm/> recoge los datos en su variable de estado *form* y se los pasa por prop {handleSearch} a el componente padre <SongSearch/> que cuando los recibe los guarda en su variable de estado *search*
        //data es lo que recibe el handleSearch osea form y acutaliza search con eso setSearch(data)
    const handleSearch = (data) => {
        setSearch(data);
    }

    //3️⃣. Pasamos como prop todos las datos que hemos recogido en los estados (search, lyric, bio) y se los pasamos a <SongDetails/>

  return (
    <div>
    <h2>Song Search</h2>
    <article>
      <SongForm handleSearch={handleSearch} />
      {loading && <Loader />}
      {search && !loading && (
        <SongDetails search={search} lyric={lyric} bio={bio} />
      )}
    </article>
  </div>
  )
}

export default SongSearch