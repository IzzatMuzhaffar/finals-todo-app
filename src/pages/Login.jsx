import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import { useContext, useState } from "react";


function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const authContext = useContext(AuthContext)

    function login() {
        const isCorrectUsername = username === "izzat@sigmaschool.com";
        const isCorrectPassword = password === "password";
        if (isCorrectUsername && isCorrectPassword) {
            authContext.setToken("1234")
            navigate("/")
        }
    }

    return (
        <Container>
            <h1 className='my-3'>Login to your account 🛑✋</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Test email: izzat@sigmaschool.com" value={username} onChange={e => setUsername(e.target.value)} />
                    <Form.Text className="text-muted">
                        We&apos;ll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Test password: password" value={password} onChange={e => setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={login}>
                    Submit
                </Button>
            </Form>
        </Container>

    );
}

export default Login;