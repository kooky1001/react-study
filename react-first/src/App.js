import {Route, BrowserRouter, Routes} from "react-router-dom";
import Home from "./routes/Home";
import Basic from "./routes/Basic";
import ToDoList from "./routes/ToDoList";
import CoinList from "./routes/CoinList";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/basic" element={<Basic/>}/>
            {/*<Route path="/todolist" element={<ToDoList/>}/>*/}
            {/*<Route path="/coinlist" element={<CoinList/>}/>*/}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
