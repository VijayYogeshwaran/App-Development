import './App.css';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import LoginS from './Components/LoginS';
import SignupS from "./Components/SignupS";
import HomeS from "./Components/HomeS";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LoginS/>}></Route>
    <Route path="/SignupS" element={<SignupS/>}></Route>
    <Route path="/HomeS" element={<HomeS/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
