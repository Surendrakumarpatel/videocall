import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"

const JoinPage = () => {
    const [id, setId] = useState("");
    const navigate = useNavigate();

    const joinHandler = () => {
        navigate(`/room/${id}`);
    }

    return (
        <div>
            <div>
                <input value={id} onChange={(e) => setId(e.target.value)} type="text" placeholder='Enter your name...' />
                <button onClick={joinHandler}>Join</button>
            </div>
        </div>
    )
}

export default JoinPage