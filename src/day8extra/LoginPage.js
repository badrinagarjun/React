import {
    Box,
    Button,
    Flex,
    Link as RadixLink,
    Text,
    TextField,
  } from "@radix-ui/themes";
  import axios from "axios";
  import { useRef, useState } from "react";
  import { Link, useNavigate } from "react-router-dom";
  
  const LoginPage = () => {
    const navigate = useNavigate();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailRef = useRef();
    const pwRef = useRef();
    const [error, setError] = useState("");
    const [user, setUser] = useState(null);
  
    const loginUser = () => {
      if (mailRef.current.value === "") {
        setError("Enter your Email ID");
        return;
      }
  
      if (!emailRegex.test(mailRef.current.value)) {
        setError("Email is Invalid");
        return;
      }
  
      if (pwRef.current.value === "") {
        setError("Password cannot be empty");
        return;
      }
  
      axios
        .get(`http://localhost:8080/users?email=${mailRef.current.value}`)
        .then((res) => {
          setUser(res.data[0]);
        })
        .catch((err) => setError(err.message));
  
      if (user) {
        if (user.password == pwRef.current.value) {
          navigate("/");
          // console.log(user);
        } else {
          setError("Invalid Password");
        }
      }
    };
  
    return (
      <Flex
        justify="center"
        style={{ height: "90vh" }}
        align="center"
        direction="column"
        gap="3"
      >
        <Box>
          <Text>Email ID</Text>
          <TextField.Input size="3" style={{ width: "350px" }} ref={mailRef} />
        </Box>
        <Box>
          <Text>Password</Text>
          <TextField.Input
            size="3"
            style={{ width: "350px" }}
            type="password"
            ref={pwRef}
          />
        </Box>
        <Button style={{ width: "350px", marginTop: "12px" }} onClick={loginUser}>
          Login
        </Button>
        {error && <Text color="ruby">{error}</Text>}
        <RadixLink underline="hover" asChild>
          <Link to="/" style={{ textDecoration: "none" }}>
            Forgot password?
          </Link>
        </RadixLink>
      </Flex>
    );
  };
  
  export default LoginPage;