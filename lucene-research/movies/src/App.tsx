import "./App.css";
import Movies from "./pages/Movies";
import Graphs from "./pages/Graphs";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";
import PrivatePage from "./pages/PrivatePage";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Movies />}></Route>
        <Route path="lucene" element={<Movies />}></Route>
        <Route path="graphs" element={<Graphs />}></Route>
        <Route
          path="private"
          element={
            <PrivateRoute>
              <PrivatePage />
            </PrivateRoute>
          }
        ></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
