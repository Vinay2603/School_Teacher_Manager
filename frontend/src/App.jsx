
import './App.css';
import { Navbar } from './Component/Navbar';
import { List } from './Component/List';
import { Route, Routes } from 'react-router-dom';

import { SingleTeacher } from './Component/SingleTeacher';
import { Login } from './Component/Login';

function App() {
  return (
    <div className="App">
         <Navbar/>
       
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path="/list" element={ <List/>}></Route>
        
          <Route path='/singleTeacher/:id' element={ <SingleTeacher/> }></Route>
          <Route path='*' element={<div>404 page not found</div>}></Route>
        </Routes>
        
    </div>
  );
}

export default App;
