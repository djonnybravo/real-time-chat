import React from 'react';
import {Box, Button, Container, Grid} from "@material-ui/core";

const Loader = () => {
    return (
        <Container>
            <Grid style={{height: window.innerHeight - 50}} container justifyContent={"center"} alignItems={"center"}>
                <Grid style={{width: 400, height: 200, background:"lightgray" }}  container direction={"column"} alignItems={"center"} justifyContent={"center"}>
                    <div className="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Loader;