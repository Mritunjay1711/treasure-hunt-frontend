import { useState, React } from 'react';
import Spinner from '../components/Spinner'

const AdminLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function adminLogin(event) {
    event.preventDefault()
    setLoading(true)
    const response = await fetch('https://strange-worm-slippers.cyclic.app/api/adminlogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })

    const data = await response.json()
    
    if (data.user) {
      localStorage.setItem('token', data.user)
      alert('Login successful')
      window.location.href = '/dashboard'
    } else {
      setLoading(false)
      alert('Please check your username and password')
    }
  }
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {loading && <Spinner/>}
          {!loading && <div className="card">
            <div className="card-header text-center">
              <h4>Admin Login</h4>
            </div>
            <div className="card-body">
              <form onSubmit={adminLogin}>
                <input className='form-control'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter your email"
                  required
                />
                <br />
                <input className='form-control password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Enter your password"
                  required
                />
                <br />
                <input className='btn btn-primary' type="submit" value="Login" />
                <br />
                <br />
              </form>
            </div>
          </div>}
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;