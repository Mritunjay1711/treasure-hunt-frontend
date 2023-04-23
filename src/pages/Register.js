import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner'

function App() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function registerUser(event) {
        event.preventDefault()
        setLoading(true)
        const response = await fetch('https://strange-worm-slippers.cyclic.app/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        })

        const data = await response.json()

        if (data.status === 'ok') {
            alert("Registration Successful!")
            navigate('/login')
        }
        else{
            setLoading(false)
            alert("Email already registered!")
        }
    }

    return (
        <div className='container mt-5'>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    {loading && <Spinner/>}
                   {!loading && <div className="card">
                        <div className="card-header text-center">
                            <h4>Register</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={registerUser}>
                                <input className='form-control'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    placeholder="Name"
                                />
                                <br />
                                <input className='form-control'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="Email"
                                />
                                <br />
                                <input className='form-control'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    placeholder="Password"
                                />
                                <br />
                                <input className='btn btn-primary' type="submit" value="Register" />
                            </form>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default App