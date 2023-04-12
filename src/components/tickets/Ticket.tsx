import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {TicketType} from "../../../type";

interface Props {
    ticket: TicketType
}

export function Ticket({ticket}: Props) {
    const navigate = useNavigate()
    return (
        <tr>
            <td>{ticket.id}</td>
            <td>{ticket.tag}</td>
            <td>{ticket.header}</td>
            <td>{ticket.createdAt.toString()}</td>
            <td>{ticket.state}</td>
            <td className={'d-flex justify-content-center'}><Button onClick={() => {
                navigate(`${ticket.id}`)
            }
            }>View</Button></td>
        </tr>

    )
}