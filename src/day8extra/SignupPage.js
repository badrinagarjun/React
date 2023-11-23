import { Box, Button, Flex, Text, TextField } from "@radix-ui/themes";
import useSignup from "./useSignup";


const SignupPage = () => {
  const signIn = useSignup();

  return (
    <Flex
      justify="center"
      style={{ height: "90vh" }}
      align="center"
      direction="column"
      gap="3"
    >
      <Box>
        <Text>Name</Text>
        <TextField.Input
          size="3"
          style={{ width: "350px" }}
          ref={signIn.nameRef}
        />
      </Box>
      <Box>
        <Text>Email ID</Text>
        <TextField.Input
          size="3"
          style={{ width: "350px" }}
          ref={signIn.mailRef}
        />
      </Box>
      <Box>
        <Text>Password</Text>
        <TextField.Input
          size="3"
          style={{ width: "350px" }}
          type="password"
          ref={signIn.pwRef}
        />
      </Box>
      <Box>
        <Text>Confirm Password</Text>
        <TextField.Input
          size="3"
          style={{ width: "350px" }}
          type="password"
          ref={signIn.cpwRef}
        />
      </Box>
      <Button
        style={{ width: "350px", marginTop: "12px" }}
        onClick={signIn.addNewUser}
      >
        Sign up
      </Button>
      {signIn.error && <Text color="ruby">{signIn.error}</Text>}
    </Flex>
  );
};

export default SignupPage;