import React from 'react';
import {AppBar, Button, Grid, Toolbar} from "@material-ui/core";

const Navbar = () => {
    return (
        <AppBar position="static" color={"secondary"}>
            <Toolbar>
                <Grid container justify={"flex-end"}>
                        <Button variant={"outlined"}>Логин</Button>
                        <Button variant={"outlined"}>ВЫйти</Button>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;