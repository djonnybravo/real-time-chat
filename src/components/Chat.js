import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Avatar, Button, Container, Grid, TextField} from "@material-ui/core";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import firebase from "firebase/compat/app";


const Chat = () => {

    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
    const [messages, loading ] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )

    console.log(firestore.collection('messages'))


    console.log(messages)
    const sendMessage = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAT: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('')
    }


    if(loading) {
        return <Loader/>
    }

    return (
        <Container>
            <Grid style={{height: window.innerHeight - 50, marginTop: "10px"}} container justifyContent={"center"} alignItems={"center"}>

                <div style={{width: '80%', height: '70vh', border: '1px solid gray', overflowY: 'auto'}}>
                    {messages.map(message =>
                        <div style={{
                            margin: 10,
                            border: user.uid === message.uid ? '2px solid green' : '2px solid red',
                            marginLeft: user.uid === message.uid ? 'auto' : '10px',
                            width: 'fit-content'

                        }}>
                            <Grid container>
                                <Avatar src={message.photoUrl}/>
                                <div>{message.displayName}</div>

                            </Grid>
                            <div>{message.text}</div>
                        </div>
                    )}
                </div>

                <Grid container direction={"column"} alignItems={"flex-end"} style={{width: '80%'}}>
                    <TextField
                        variant={"outlined"}
                        maxRows={2}
                        fullWidth
                        value={value}
                        onChange={e => {setValue(e.currentTarget.value)}}
                    />
                    <Button onClick={sendMessage} >Отправить</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Chat;