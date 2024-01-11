import React,{ useState, useEffect, useContext } from 'react'
import CrudContext from '../context/CrudContext'

const initialForm = {
    name:"",
    especie:"",
    id:null,
};

const CrudForm = () => {
    const { createData, updateData, dataToEdit, setDataToEdit} = useContext(CrudContext)
    const [form, setForm] = useState(initialForm);

    useEffect(() => {
      if(dataToEdit) {
        setForm(dataToEdit);
      }else{
        setForm(initialForm);
      }
    }, [dataToEdit]);
    
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
         //validación de datos 
        if(!form.name || !form.especie) {
            alert("Faltan Datos");
            return;
        }

        if(form.id === null){
            createData(form);
        }else{
            updateData(form);
        }

        handleReset();
    };

    const handleReset = (e) => {
        setForm(initialForm);
        setDataToEdit(null);
    };

  return (
    <div>
        <h3>{ dataToEdit ? "Editar": "Agregar"} especie</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Nombre" onChange={handleChange} value={form.name}/>
            <input type="text" name="especie" placeholder="especie" onChange={handleChange} value={form.especie}/>
            <input type="submit" value="enviar" />
            <input type="reset" value="limpiar" onClick={handleReset}/>
        </form>
    </div>
  )
}

export default CrudForm;