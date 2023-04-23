import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'
import UserCard from '../components/UserCard'



const Dashboard = () => {
    const navigate = useNavigate()
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        const token = localStorage.getItem('token')
        async function populateUsers() {
            const req = await fetch('https://strange-worm-slippers.cyclic.app/api/users', {
                headers: {
                    'x-access-token': localStorage.getItem('token')
                },
            })
    
            const data = await req.json()
            if (data.length > 2) {
                setUsers(data)
            }
            else {
                alert(data.error)
                navigate('/adminlogin')
            }
        }

        if (token) {
            const user = jwt_decode(token)
            if (!user) {
                localStorage.removeItem('token')
                navigate('/login', { replace: true })
            } else {
                console.log('Populating quote')
                populateUsers()
            }
        }
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    const deleteUser = async (email)=>{
        const req = await fetch('https://strange-worm-slippers.cyclic.app/api/deleteuser',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token' : localStorage.getItem('token')
            },
            body: JSON.stringify({
                email: email
            }),
        })

        const data = await req.json()
        console.log(data)
        if(data.status === 'ok'){
            alert('User deleted')
            window.location.reload()
        }
        else{
            alert(data.error)
        }
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-4">
                    <h3>Users List</h3>
                    <ul className="list-group list-group-flush">
                        {Object.keys(users).map((key) => (
                            <li key={key} className="list-group-item">
                                {<UserCard name={users[key].name} email={users[key].email} onClick={()=>deleteUser(users[key].email)}/>}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='col-md-8'>
                    <p><h3>Update Riddles</h3></p>
                    <Link to="/updatelevel1"><button className='btn btn-primary mx-2'>Level-1</button></Link>
                    <Link to="/updatelevel2"><button className='btn btn-primary mx-2'>Level-2</button></Link>
                    <Link to="/updatelevel3"><button className='btn btn-primary mx-2'>Level-3</button></Link>
                    <Link to="/updatelevel4"><button className='btn btn-primary mx-2'>Level-4</button></Link>
                    <Link to="/updatelevel5"><button className='btn btn-primary mx-2'>Level-5</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Dashboard