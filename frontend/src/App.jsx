import logo from './logo.svg';
import './App.css';
import { Navbar } from './Component/Navbar';
import { List } from './Component/List';

function App() {
  return (
    <div className="App">
         <Navbar/>
         <div>
           <select>
             <option value="#">---Filter by gender---</option>
             <option value="Male">Male</option>
             <option value="Female">Female</option>
           </select>
           <button>sort by Age</button>
         </div>
         <List/>
    </div>
  );
}

export default App;
