import React from 'react'
import { useId } from 'react';
function SampleText() {
    
        const usernameId = useId();
        const emailId = useId();
        const passwordId = useId();
     
        return (
          <form>
            <label htmlFor={usernameId}>Username:</label>
            <input type="text" id={usernameId} defaultValue="Name"/><br></br><br/>
      
            <label htmlFor={emailId}>Email:</label>
            <input type="email" id={emailId}defaultValue="abc@gmail.com"/><br/><br/>
      
            <label htmlFor={passwordId}>Password:</label>
            <input type="password" id={passwordId} defaultValue="abc12345"/><br/><br/>
      
            <button type="submit">Submit</button>
          </form>
        );
      }
      


export default SampleText