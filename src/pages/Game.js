import { React, useEffect, useState } from 'react';
import story from '../assets/data.json'
import Spinner from '../components/Spinner'
import { useParams, useNavigate } from 'react-router-dom';

const Game = () => {
    const navigate = useNavigate();
    const { name } = useParams();
    const [level, setLevel] = useState(1);
    const [riddle, setRiddle] = useState('');
    const [clue, setClue] = useState('');
    const [answer, setAnswer] = useState('');
    const [match, setMatch] = useState('');
    const [loading, setLoading] = useState(false)
    const [showHint, setShowHint] = useState(false)
    const [attempt, setAttempt] = useState(0)
    const [hintMenu, setHintMenu] = useState(false)

    async function populateRiddle() {
        const req = await fetch(`http://127.0.0.1:1337/api/level${level}`, {
            headers: {
                'x-access-token': localStorage.getItem('token')
            },
        })

        const data = await req.json()
        console.log(data.answer)
        if (data.status === 'ok') {
            setRiddle(data.riddle);
            setClue(data.clue);
            setAnswer(data.answer);
        }
        else {
            alert(data.error)
        }
    }

    //handling the submit and checking the answer to increment levels
    async function handleSubmit(e) {
        e.preventDefault()
        if (attempt > 0)
            setHintMenu(true)
        if (answer.toLowerCase() === match.toLowerCase()) {
            setMatch('')
            setAttempt(0)

            alert(story[level - 1].nextLevelClue)

            //User won
            if (level === 5) {
                const req = await fetch('https://strange-worm-slippers.cyclic.app/api/updateUser', {
                    method: 'POST',
                    headers: {
                        'x-access-token': localStorage.getItem('token')
                    },
                })

                const data = await req.json()
                if(data.status === 'ok')
                    console.log('Database Updated')
                else
                    console.log('Error')
                navigate(`/win/${name}`)
            }
            setLevel(prevCount => prevCount + 1)
            setHintMenu(false)
            setShowHint(false)
            setLoading(true)
            const req = await fetch(`https://strange-worm-slippers.cyclic.app/api/level${level + 1}`, {
                headers: {
                    'x-access-token': localStorage.getItem('token')
                },
            })

            const data = await req.json()
            if (data.status === 'ok') {
                setRiddle(data.riddle);
                setClue(data.clue);
                setAnswer(data.answer);
            }
            else {
                alert(data.error)
            }
            setLoading(false)
        }
        else {
            alert('Wrong answer, Try Again!')
            setAttempt(attempt + 1)
        }
    }
    useEffect(() => {
        populateRiddle()
    }, []);// eslint-disable-line react-hooks/exhaustive-deps



    const handleHint = () => {
        setShowHint(true)
    }

    return (
        <div className="container my-3">
            <div className='mb-4'>
                <div>
                    <p><i>Welcome! {name}</i></p>
                </div>
                <div className='d-flex justify-content-center'>
                    <h2>Level {level}</h2>
                </div>
                <h4>{story[level - 1].statement}</h4>
                {loading && <Spinner />}
                {!loading && <div className="">
                    <h4>{riddle}</h4>
                </div>}
                <form onSubmit={handleSubmit} autoComplete="off">
                    <div className='col-sm-3'>
                        <input className='form-control my-3' type="text" id="answer" value={match} onChange={(event) => setMatch(event.target.value)} placeholder='Enter your answer here' />
                    </div>
                    <input className='btn btn-primary' type="submit" value="Check answer" />
                </form>
            </div>
            {hintMenu && <div className='pt4'>
                <div>
                    <h6>Want Hint?</h6>
                </div>
                {!showHint && <input className='btn btn-secondary' type="button" onClick={handleHint} value="Click here" />}
                {showHint && <p>{clue}</p>}
            </div>}
        </div>
    );
}

export default Game;