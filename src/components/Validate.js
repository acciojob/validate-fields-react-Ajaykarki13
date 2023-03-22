import React, {useState} from 'react';

const Validate = () =>
{
const[input,setInput]=useState({});

function  handleChange({target})
{
   // const name = target.name
   // const value=target.value
   const{name,value}=target
setInput((prev)=>({...prev,[name]:value}))
}
function handleSubmit(e)
{
    e.preventDefault()
if(input==null)
{
    <p id="errorMessage">Both username and password are requird</p>
}
}


return(
<form onSubmit={handleSubmit}>
<label for='username'>Username:</label>
<input onChange={handleChange}name="Username" value={input.Username} type='text'/>
<label for='password'>Username:</label>
<input onChange={handleChange}name="Password" value={input.Password} type='password'/>
<button type="submit">Login</button>
</form>
)
}
export default Validate ;