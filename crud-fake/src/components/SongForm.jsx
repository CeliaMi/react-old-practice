import React, {useState}  from 'react'

    //2️⃣.Creamos nuestro estado incial vacío
const initialForm = {
    artist:"",
    song: "",
}

        //❔ ¿Por qué SongForm tiene handleSearch pasado como prop?
        // porque le va a pasar los datos de form a SongSearch (su padre) para que actualice con ellos su estado (search).

        //Queremos que la información del formulario llegue al componente SongSearch y le cambie su estado para hacer la búsqueda. form -> <SongForm/> -> handleSearch -> <SearchSong/> -> search


const SongForm = ({handleSearch}) => {
    //1️⃣.Utilizamos el hook useState para controlar el estado de nuestro formulario
    const [form, setForm] = useState(initialForm);

    const handleChange = (e) => {
    //3️⃣.Creamos la función que cambia nuestro estado
        setForm({
            //*SetForm* es "la máquinita" que va hacer que nuestro estado cambie ¿Cómo lo hace?
            //3.1 Hace una copia del objeto formulario con *...* (Spread operator: este operador nos permite copiar de manera simple una parte o la totalidad de un elemento array o un objeto JavaScript.)  
            ...form,
            //3.2 Toma una copia del objeto formulario. *e.target* es el objeto que origina el evento. con el name(atributo de la etiqueta HTML) diferencia si es el artista o la canción *name="artist"* y después lo define con su valor actual que recoge del value del input *e.target.value*
            [e.target.name]: e.target.value,
        });
    };

    //4️⃣ Controlamos el envío de nuetro formulario con un handle.
    const handleSubmit = (e) => {
            //4.1 prevenimos el envio del formulario porqué queremos contrarlo con React 
        e.preventDefault();
            //4.2 controlamos con condicionales que hace en función de los datos que recibe. 
         if(!form.artist || !form.song) {
            alert("Faltan datos");
            return;
        }
        
            //4.3 si los datos vienen llenos le pasamos al handleSearch el estado form que ahora se encuentra lleno, que pasamos como prop a su componente padre songSearch 
        handleSearch(form);
            //4.4 inicializamos el estado para que los input se queden vacios una vez este ya hecha la búsqueda
        setForm(initialForm);
             //4.3 se lo pasamos a la etiqueta form a través del atributo submit
    };
    
  return (
    <div>
    <form onSubmit={handleSubmit}>
        <input type="text" name="artist" placeholder="Artista" onChange={handleChange} value={form.artist}/>
        <input type="text" name="song" placeholder="Canción" onChange={handleChange} value={form.song}/>
        <input type="submit" value="Enviar" />

    </form>
    </div>
  )
}

export default SongForm