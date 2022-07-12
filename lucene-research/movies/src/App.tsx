import "./App.css";
import Movies from "./pages/Movies";
import Graphs from "./pages/Graphs";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";
import PrivatePage from "./pages/PrivatePage";

function App() {
  
  return (
    <div className="App">
     <Header/>
      <Routes>
        <Route path="/"  element={<Movies />}></Route>
        <Route path="lucene"  element={<Movies />} ></Route>
        <Route path="graphs" element={<Graphs />}></Route>
        <Route path="private" element={<PrivatePage />}></Route>
      </Routes>
        
    </div>
  );
}

export default App;
