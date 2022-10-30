import { useState } from "react"

const Login = () => {
  const [data, setData] = useState({username: '', password: ''})

  function handleFormSubmit(event) {
    event.preventDefault()
    console.log(data)
    alert(JSON.stringify(data))
  }

  const handleInputChange = (text, name) => {
    setData({...data, [name]: text.target.value})
  }
  
  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>Username:
          <input type="text" value={data.username} onChange={(e) => handleInputChange(e, 'username')} />
        </label>
        <label>Password:
          <input type="password" value={data.password} onChange={(e) => handleInputChange(e, 'password')} />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login