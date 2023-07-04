import React from 'react'
import { useId } from 'react';
function Form() {
    
        const usernameId = useId();
        const emailId = useId();
        const passwordId = useId();
     
        return (
          <form>
            <label htmlFor={usernameId}>Username:</label>
            <input type="text" id={usernameId} /><br></br><br/>
      
            <label htmlFor={emailId}>Email:</label>
            <input type="email" id={emailId} /><br/><br/>
      
            <label htmlFor={passwordId}>Password:</label>
            <input type="password" id={passwordId} /><br/><br/>
      
            <button type="submit">Submit</button>
          </form>
        );
      }
      


export default Form