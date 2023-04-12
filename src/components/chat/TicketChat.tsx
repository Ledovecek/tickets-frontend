import {useParams} from "react-router-dom";
import {Message} from "./Message";

export function TicketChat() {

    const {userUuid, ticketId} = useParams()
    const messages = []

    let teamMessage = Message(true);
    let playerMessage = Message(false);

    for (let i = 0; i < 15; i++) {
        messages.push(teamMessage)
        messages.push(playerMessage)
    }

    return (
        <>
        {
            messages.map(message => {
                return message
            })
        }
        </>
    )
}