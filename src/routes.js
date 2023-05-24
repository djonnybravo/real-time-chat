import {CHAT_ROUTE, LOGIN_ROUTE} from "./utils/consts";
import Login from "./components/Login";
import Chat from "./components/chat";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        component: <Login/>
    }
]

export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        component: <Chat/>
    }
]