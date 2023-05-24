import React, {useContext} from 'react';
import {Box, Button, Container, Grid} from "@material-ui/core";

const Login = () => {

    const {auth} = useContext(Context)

    return (
        <Container>
            <Grid style={{height: window.innerHeight - 50}} container justifyContent={"center"} alignItems={"center"}>
                <Grid style={{width: 400, height: 200, background:"lightgray" }}  container direction={"column"} alignItems={"center"} justifyContent={"center"}>
                    <Box p={5}>
                        <Button variant={"outlined"}>Войти с помощью GOOGLE</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;