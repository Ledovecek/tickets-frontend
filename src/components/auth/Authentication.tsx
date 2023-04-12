import {Alert, Button, Form} from "react-bootstrap";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import Swal from 'sweetalert2'
import {useSignIn} from "react-auth-kit";
import {readableStreamToString} from "../../utils/Stream";

function Login() {
    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const signIn = useSignIn();

    return(
        <div className={'container d-flex justify-content-center'}>
            <Form className={'col-lg-8'} onSubmit={async (event) => {
                event.preventDefault()
                const responsePromise= await fetch("http://localhost:8080/api/auth", {
                    method: 'POST',
                    body: JSON.stringify({
                        realName: username,
                        password: password
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                let response = await readableStreamToString(responsePromise.body);
                let responseObject = JSON.parse(response);
                let authenticated = responseObject.response;
                let aToken = responseObject.token;
                if (authenticated) {
                    signIn({
                        expiresIn: 3600,
                        token: aToken,
                        tokenType: "Bearer",
                        authState: {username: username}
                    });
                    navigate("/tickets")
                } else {
                    await Swal.fire({
                        title: "Wrong credentials",
                        icon: "error",
                        position: "top-end",
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        }
                    })
                }
            }}>
                <Form.Group className={"mb-3"} controlId={"formBasicEmail"}>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" onChange={(event) => {
                        setUsername(event.target.value)
                    }}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required={true} onChange={(event) => {
                        setPassword(event.target.value)
                    }} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>

    )
}

export default Login