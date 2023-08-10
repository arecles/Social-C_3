import{Routes, Route, Navigate} from "react-router-dom";
import Chat from "./paginas/Chat";
import Login from "./paginas/Login";
import Registro from "./paginas/Registro";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavBar from "./componentes/NavBar";
import { useContext } from "react";
import { AutorContext } from "./context/AutorContext";

function App() {
  const {user} = useContext(AutorContext);

  return (
    <>
    <NavBar />
    <Container >
      <Routes>
        <Route path="/" element={user ? <Chat /> : <Login/>} />
        <Route path="/registro" element={user ? <Chat /> : <Registro/>} />
        <Route path="/login" element={user ? <Chat /> : <Login/>} />        
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
      </Container>  
    </>
  );
}

export default App;