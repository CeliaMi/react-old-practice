import React from 'react'
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import { useState, useEffect} from "react";
import { helpHttp } from '../helpers/helpHttp';
import Message from './Message';
import Loader from './Loader';


const CrudApi = () => {

const [db, setDb] = useState(null);

const [dataToEdit, setDataToEdit] = useState(null);
const [error, setError ] = useState(null);
const [loading, setLoading ] = useState(false);

let api = helpHttp();
let url= "http://localhost:5000/biodiversidad";


useEffect(()=>{
    setLoading(true);
    helpHttp().get(url).then(res =>{
        if(!res.err){
            setDb(res);
            setError(null);
        }else{
            setDb(null);
            setError(res);
        }
        setLoading(false);
    });
},[url]);


const createData = (data) => {
    
    data.id = Date.now();

    let options = {
     body:data,
     headers: { "content-type": "application/json"},
    };

    api.post(url,options).then((res) => {
       // console.log(res);
        if(!res.err){
            setDb([...db,res]);
        } else {
            setError(res);
        }
    });
     setDb([...db,data]);
};

const updateData = ( data ) => {
    //le llamo endpoint por no usar "url" que ya se esta usando arriba, cómo ahora le tengo que pasar el id...
    let endpoint = `${url}/${data.id}`

    let options = {
        body:data,
        headers: { "content-type": "application/json"},
       };

    api.put(endpoint, options).then((res)=>{
        if(!res.err){
            let newData = db.map((el) => (el.id === data.id ? data:el));
            setDb(newData);
        } else {
            setError(res);
        }
    })
//  let newData = db.map((el => el.id === data.id ? data : el));
//  setDb(newData);
};

const deleteData = (id) => {
    let isDelete = window.confirm(
     `¿Estas segura de eliminar el usuario '${id}'?`
    );
    if(isDelete) {

        let endpoint = `${url}/${id}`;
        let options = {
            headers: { "content-type": "application/json"},
           };

        api.del(endpoint, options).then(res => {
            if(!res.err){
                let newData =db.filter((el)=> el.id!==id);
                setDb(newData);
            }else {
                setError(res);
            }
        })
    }else{
        return;
    }
};

  return (
    <div>
    <h1>CRUD API 💫 jsonServer</h1>
    <CrudForm 
    createData={createData}
    updateData= {updateData} 
    dataToEdit={dataToEdit} 
    setDataToEdit={setDataToEdit}
    />
    {loading && <Loader/>}
    {error && <Message msg={`Error ${error.status} : ${error.statusText}`} bgColor="#dc3545"/>}
    {db &&
    <CrudTable 
    data={db} 
    setDataToEdit={setDataToEdit}
    deleteData={deleteData}
    />}
    </div>
  )
}

export default CrudApi