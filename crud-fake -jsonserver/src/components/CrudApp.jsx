import React from 'react'
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import { useState } from "react";

const initialDb = [
    {
      id:1,
      name:"Rosa",
      especie:"Zorro",
    },
    {
      id:2,
      name:"Mariano",
      especie:"ciervo",
    },
    {
      id:3,
      name:"Juana",
      especie:"lagartija de valverde",
    },
    {
      id:4,
      name:"Benito",
      especie:"murciélago",
    },
    {
      id:5,
      name:"Violeta",
      especie:"Jabalí",
    },
  ];
const CrudApp = () => {

const [db, setDb] = useState(initialDb);

const [dataToEdit, setDataToEdit] = useState(null);

const createData = (data) => {
    data.id = Date.now();
     setDb([...db,data]);
};

const updateData = ( data ) => {
 let newData = db.map((el => el.id === data.id ? data : el));
 setDb(newData);
};

const deleteData = (id) => {
    let isDelete = window.confirm(`¿Estas segura de eliminar el usuario '${id}'?`
    );
    if(isDelete) {
        let newData = db.filter(el => el.id !== id);
        setDb(newData);
    }else{
        return;
    }
};

  return (
    <div>
    <h1>CRUD CRUD CRUD 🐸</h1>
    <CrudForm 
    createData={createData}
    updateData= {updateData} 
    dataToEdit={dataToEdit} 
    setDataToEdit={setDataToEdit}/>
    <CrudTable 
    data={db} 
    setDataToEdit={setDataToEdit}
    deleteData={deleteData}/>
    
    </div>
  )
}

export default CrudApp