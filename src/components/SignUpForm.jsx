import { useState } from 'react'
import axios from 'axios'

export default function SignUpForm( { setToken }){
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState(null)


async function handleSubmit(event) {
  event.preventDefault();



try { 
  const response = await axios.post("https://fsa-jwt-practice.herokuapp.com/signup", {
  username,
  password,
});

const result = response.data;
console.log(result);

if (response.status === 200) {
  setToken(result.token);
} else { 
  setError(result.message || "an error has occurred");
}
} catch (error) {
  setError(error.message || "an error has occurred");
}
}

return (
  <>
    <h2>Sign Up!</h2>
    {error && <p>{error}</p>}

    <form onSubmit={handleSubmit}>

      <label>
        Username:
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>

      <label>
        Password:
        <input 
        type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}/>
      </label>

      <button>Submit</button>
      </form>
  </>
);
}