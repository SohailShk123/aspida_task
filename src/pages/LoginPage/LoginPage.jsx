import React, { useEffect, useState } from 'react'
import './LoginPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../features/slices/usersSlice'

const LoginPage = () => {

  const [user, setUser] = useState({
    email: "",
    password: ""
  })
  const [error, setError] = useState(false)
  const dispatch = useDispatch()
  const users = useSelector(state => state?.users?.users)
  const logedInUser = useSelector(state => state?.users?.logedInUser)
  const navigate = useNavigate()

  useEffect(() => {
    if (logedInUser !== null || undefined) {
      if (logedInUser?.role === "admin") {
        navigate("/dashboard")
      } else {
        navigate("/apps")
      }
    }
  }, [])

  const onChangeHandler = (e) => {
    setUser(prevUser => ({ ...prevUser, [e.target.name]: e.target.value }))
  }

  const loginHandler = (e) => {
    e.preventDefault()
    const isUserValid = users.find(u => u.email === user.email && u.password === user.password)
    if (isUserValid) {
      dispatch(login(isUserValid))
      if (isUserValid?.role === "admin") {
        navigate('/dashboard')
      } else {
        navigate('/apps')
      }
    } else {
      setError(true)
    }
  }

  return (
    <div className='login_page'>
      <form onSubmit={loginHandler} className="form_container shadow-lg rounded-4 p-5" >
        <div className="mb-5 h1 text-center">Login</div>
        <div>
          <div className="mb-3" >
            <label htmlFor="email" className="form-label">Email address</label>
            <input onChange={onChangeHandler} type="email" value={user.email} name='email' className="form-control" id="email" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input onChange={onChangeHandler} type="password" value={user.password} name='password' className="form-control" id="password" placeholder="Enter your password" />
          </div>
        </div>
        <div className='mb-3 text-danger'>
          {error && <div>Invalid Credentials</div>}
        </div>
        <div className='mb-3'>
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage