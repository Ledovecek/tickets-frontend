import './Message.css'

export function Message(team: boolean) {
    return(
        <div className={team ? 'message' : 'message-staff'}>
            <>
                <div className={'ticket-header'}>
                    <h5 id={'message-title'}>Ledovec</h5>
                    <p id={'message-date'}>15.01.2023 20:02:01</p>
                </div>
                <p>Lorem ipsum dor sit amet</p>
            </>
        </div>
    )
}