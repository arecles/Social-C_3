import{Alert, Button, Form, Row, Col,Stack } from "react-bootstrap";
const login = () => {
    return (
        <>
        <form>
            <Row className="Formulario">
                <Col xs={5}>
                    <Stack gap={3}>
                        <h2>Login</h2>
                        <Form.Control type="text" placeholder="Email"/>
                        <Form.Control type="text" placeholder="Contraseña"/>
                        <Button variant="primary" type="submit">Iniciar Sesion</Button>
                        <Alert variant="danger"><p>Error</p></Alert>
                    </Stack>
                </Col>
            </Row>
        </form></>
    );
}
 
export default login;