 import React, {useContext} from 'react';
import {Box, Button, Container, Grid} from "@material-ui/core";
 import {Context} from "../index";
 import firebase from "firebase/compat/app";

const Login = () => {

    const {auth} = useContext(Context)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        console.log(user)
    }

    return (
        <Container>
            <Grid style={{height: window.innerHeight - 50}} container justifyContent={"center"} alignItems={"center"}>
                <Grid style={{width: 400, height: 200, background:"lightgray" }}  container direction={"column"} alignItems={"center"} justifyContent={"center"}>
                    <Box p={5}>
                        <Button variant={"outlined"} onClick={login}>Войти с помощью GOOGLE</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;