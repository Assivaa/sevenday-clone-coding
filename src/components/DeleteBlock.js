const DeleteBlock = () =>{

    const deleteTicket = () =>{
        alert('deleted')
    }

    return (
        <div className="delete-block">
            <div className="delete-icon" onClick={deleteTicket}>X</div>
        </div>
    )
}

export default DeleteBlock