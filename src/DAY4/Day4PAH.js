import React, { useState } from 'react';
import { TextField , Button , Container } from '@mui/material';

const Day4PAH= () => {

  const [username, setUsername] = useState('');
  const handleUsername = (event) => { 
      setUsername(event.target.value) 
  }

  const [password, setPassword] = useState('');
  const handlePassword = (event) => { 
      setPassword(event.target.value) 
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <Container maxWidth="xs">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>

        <TextField variant="outlined" margin="normal" required fullWidth label="Username" onChange={handleUsername}>
            {username}
        </TextField>

        <TextField variant="outlined" margin="normal" required fullWidth label="Password" type="password" onChange={handlePassword}>
            {password}
        </TextField>

        <Button type="submit" fullWidth variant="contained" color="primary">
          Log In
        </Button>

      </form>
    </Container>
  );
};

export default Day4PAH;