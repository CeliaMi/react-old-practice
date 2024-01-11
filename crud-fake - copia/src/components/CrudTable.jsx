import React from 'react'
import CrudTableRow from './CrudTableRow'

const CrudTable = ({data, setDataToEdit, deleteData}) => {
  return (
    <div>
    <h3>Tabla de Datos</h3>
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Especie</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
        {data.lenght === 0 ? (
            <tr>
            <td colSpan="3">Sin datos</td>
            </tr>
            ):(
                data.map((el) => (
                <CrudTableRow
                 key={el.id} el={el}
                 setDataToEdit={setDataToEdit}
                 deleteData={deleteData}
                 />
                 ))
                 )}
        </tbody>
    </table>
    </div>
  );
}

export default CrudTable