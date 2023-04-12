import Table from 'react-bootstrap/Table';

import './tickets.css'
import {TicketType} from "../../../type";
import {Ticket} from "./Ticket";
import axios from "axios";
import {useEffect, useState} from "react";

export function Tickets() {
    const [response, setResponse] = useState<TicketType[]>();

    useEffect(() => {
        axios.get("http://localhost:8080/api/tickets/15a7681e-e2cc-47fa-af5b-b48a6ac1348e").then((res) => {
            setResponse(res.data)
        });
    }, [])
    
    return (
        <>
            <h1>Your tickets</h1>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Tag</th>
                    <th>Subject</th>
                    <th>Created at</th>
                    <th>Last reply</th>
                    <th>View</th>
                </tr>
                </thead>
                <tbody>
                <>{
                    response?.map((ticket: TicketType) => (
                        <Ticket ticket={ticket} key={ticket.id}/>
                    ))}</>
                </tbody>
            </Table>
        </>
    );
}