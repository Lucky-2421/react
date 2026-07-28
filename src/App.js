import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './components/list';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import ViewEmployee from './components/ViewEmployee';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/update/:id" element={<UpdateEmployee />} />
        <Route path="/view/:id" element={<ViewEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
