import React, {useContext} from 'react'
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import Message from './Message';
import Loader from './Loader';
import CrudContext from '../context/CrudContext';


const CrudApi = () => {
    const {db,loading, error} = useContext(CrudContext);


  return (
    <div>
    <h1>CRUD API 💫 jsonServer con Context</h1>
    <CrudForm />
    {loading && <Loader/>}
    {error && <Message msg={`Error ${error.status} : ${error.statusText}`} bgColor="#dc3545"/>}
    {db &&
    <CrudTable />}
    </div>
  )
}


export default CrudApi