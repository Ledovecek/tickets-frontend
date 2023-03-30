import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function Tickets() {


    const ticket1 = [1, "Discord bug", "Test_Player", "Waiting for team reply"]
    const ticket2 = [2, "Discord bug", "Test_Player1", "Waiting for team reply"]
    const ticket3 = [3, "Discord bug", "Test_Player2", "Waiting for team reply"]
    const ticket4 = [4, "Discord bug", "Test_Player3", "Waiting for team reply"]

    let ticketList = [ticket1, ticket2, ticket3, ticket4]

    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Tag</th>
                <th>Created by</th>
                <th>Last reply</th>
                <th>View</th>
            </tr>
            </thead>
            <tbody>
            <>   
            {ticketList.map(ticket => {
                return(
                    <tr>
                        <td>{ticket[0]}</td>
                        <td>{ticket[1]}</td>
                        <td>{ticket[2]}</td>
                        <td>{ticket[3]}</td>
                        <td><Button onClick={() => {say(ticket[0].toString())}}>View</Button></td>
                    </tr>
                )
            })}
            </>
            </tbody>
        </Table>
      );
}

function say(text: string) {
    alert(text)
}


export default Tickets