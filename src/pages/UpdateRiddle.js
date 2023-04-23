import React from "react";
import { useState } from "react";

const UpdateRiddle = (props) => {
    const [riddle, setRiddle] = useState('');
    const [clue, setClue] = useState('');
    const [answer, setAnswer] = useState('');
    
    async function updateRiddle(event) {
        event.preventDefault();

        const response = await fetch(`https://strange-worm-slippers.cyclic.app/api/add${props.level}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token' : localStorage.getItem('token'),
            },
            body: JSON.stringify({
                riddle,
                clue,
                answer,
            }),
        })

        const data = await response.json()
        if (data.status === 'ok') {
            alert('Update successful')
            window.location.href = '/dashboard'
        } else {
            alert(data.error)
            window.location.href = '/adminlogin'
        }
    };

    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header text-center">
                            <h4>Update Riddles</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={updateRiddle}>
                                <input className='form-control'
                                    value={riddle}
                                    onChange={(e) => setRiddle(e.target.value)}
                                    type="text"
                                    placeholder="Enter the riddle"
                                />
                                <br />
                                <input className='form-control'
                                    value={clue}
                                    onChange={(e) => setClue(e.target.value)}
                                    type="text"
                                    placeholder="Enter your clue"
                                />
                                <br />
                                <input className='form-control'
                                    value={answer}
                                    onChange={(e) => setAnswer(e.target.value)}
                                    type="text"
                                    placeholder="Enter your answer"
                                />
                                <br />
                                <input className='btn btn-primary' type="submit" value="UpdateRiddle" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
            
export default UpdateRiddle