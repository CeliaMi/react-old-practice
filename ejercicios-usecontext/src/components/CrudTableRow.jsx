import React, { useContext }  from 'react'
import CrudContext from "../context/CrudContext";

const CrudTableRow = ({ el }) => {
    const {setDataToEdit, deleteData} = useContext(CrudContext);

    let { name, especie, id } = el;
    return (
        <>
            <tr>
                    <td>{name}</td>
                    <td>{especie}</td>
                    <td>
                    <button onClick= {() => setDataToEdit(el)}>Editar</button>
                    <button onClick= {() => deleteData(id)}>Eliminar</button>
                    </td>
            </tr>
        </>
  )
}

export default CrudTableRow;