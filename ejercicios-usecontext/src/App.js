import './App.css';
import CrudApi from './components/CrudApi';
import MyPage from './components/MyPage';
import { CrudProvider } from './context/CrudContext';

function App() {
  return (
    <div className='App'>
      <h1>Aprendiendo useContext</h1>
      <hr/>
      <MyPage/>
      <CrudProvider>
        <CrudApi/>
      </CrudProvider>

    </div>
  );
}

export default App;
