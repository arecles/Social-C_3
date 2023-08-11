import { useContext } from "react";
import{Alert, Button, Form, Row, Col,Stack } from "react-bootstrap";
import { AutorContext } from "../context/AutorContext";

const Login = () => {

    const{
        loginUser,
        loginError,
        loginInfo,
        updateLoginInfo,
        isLoginLoading} = useContext(AutorContext)

    return (
        <>
        <Form onSubmit={loginUser}>
            <Row className="Formulario">
                <Col xs={5}>
                    <Stack gap={3}>
                        <h2>Login</h2>
                        <Form.Control type="email" placeholder="Email" onChange={(e) => updateLoginInfo({...loginInfo, email: e.target.value})}/>
                        <Form.Control type="password" placeholder="Contraseña" onChange={(e) => updateLoginInfo({...loginInfo, password: e.target.value})}/>
                        <Button variant="primary" type="submit">
                            {isLoginLoading? "Estas entrando..." : "Iniciar Sesion"}
                        </Button>
                        {loginError?.error &&(
                            <Alert variant="danger">
                                <p>{loginError?.message}</p></Alert>
                        )}
                    </Stack>
                </Col>
            </Row>
        </Form></>
    );
}
 
export default Login;