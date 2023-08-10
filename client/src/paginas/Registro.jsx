import {useContext} from "react";
import {Alert, Button, Form, Row, Col, Stack} from "react-bootstrap";
import {AutorContext} from "../context/AutorContext";

const Registro = () => {
    const {
        registerInfo, 
        updateRegisterInfo, 
        registerUser, 
        registerError, 
        isRegisterLoading,
    } = useContext(AutorContext);

    return (
        <>
        <Form onSubmit={registerUser}>
            <Row className="Formulario">
                <Col xs={6}>
                    <Stack gap={3}>
                        <h2>Registro</h2>
                                               
                        <Form.Control 
                            type="text" 
                            placeholder="Nombre" 
                            onChange={(e) => 
                                updateRegisterInfo({
                                    ...registerInfo,
                                    name: e.target.value,
                                })
                            } 
                        />
                        <Form.Control 
                            type="email" 
                            placeholder="Email" 
                            onChange={(e) => 
                                updateRegisterInfo({
                                    ...registerInfo, 
                                    email: e.target.value,
                                })
                            }
                        />
                        <Form.Control 
                            type="password"
                            placeholder="Contraseña" 
                            onChange={(e) => 
                                updateRegisterInfo({
                                    ...registerInfo, 
                                    password: e.target.value,
                                })
                            }
                        />
                        <Button variant="primary" type="submit">
                            {isRegisterLoading ? "Creando tu cuenta" : "Registro"}
                        </Button>
                        {registerError?.error && (
                            <Alert variant="danger">
                                <p>{registerError?.message}</p>
                            </Alert>
                        )}
                                                
                    </Stack>
                </Col>
            </Row>
        </Form></>
    );
}
 
export default Registro;