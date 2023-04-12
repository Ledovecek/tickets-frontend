import 'bootstrap/dist/css/bootstrap.css'
import {Route, Routes} from "react-router-dom";
import React from "react";
import {TicketChat} from "./components/chat/TicketChat";
import {RequireAuth} from "react-auth-kit";
import {Tickets} from "./components/tickets/Tickets";
import Authentication from "./components/auth/Authentication";

const App = () => {
    return (
        <Routes>
            <Route path="/" Component={Authentication}/>
            <Route path="/login" Component={Authentication}/>
            <Route path="/tickets" element={
                <RequireAuth loginPath={"/login"}>
                    <Tickets />
                </RequireAuth>}/>
            <Route path="tickets/:ticketId" element={
                <RequireAuth loginPath={"/login"}>
                    <TicketChat></TicketChat>
                </RequireAuth>
            }/>
        </Routes>
    )
}

export default App
