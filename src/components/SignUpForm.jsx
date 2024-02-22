import { useState } from 'react'
import axios from 'axios'
// hello
export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

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
       
      } else {
        setError(result.message || "Unknown error occurred");
      }
    } catch (error) {
      setError(error.message || "Unknown error occurred");
    }
  }
  return ( 
    <> 
      <h2>Sign Up!</h2>
      {error && <p>{error}</p>}

      <form onSubmit = {handleSubmit}>

        <label>
          Username: 
          <input value={username} onChange={(e) => setUsername(e.target.value)}/>
        </label>

        <label>
          Password:
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
            </label>

          <button>Submit</button>
      </form>
    </>
  );
}