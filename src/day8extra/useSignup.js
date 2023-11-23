import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const useSignup = () => {
  const nameRef = useRef();
  const mailRef = useRef();
  const pwRef = useRef();
  const cpwRef = useRef();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const addNewUser = () => {
    if (nameRef.current.value === "") {
      setError("Name cannot be Empty");
      return;
    }

    if (mailRef.current.value === "") {
      setError("Mail Cannot be Empty");
      return;
    }

    if (!emailRegex.test(mailRef.current.value)) {
      setError("Email ID is invalid");
      return;
    }

    if (pwRef.current.value !== cpwRef.current.value) {
      setError("Password dosen't match");
      return;
    }

    if (pwRef.current.value === "" || cpwRef.current.value === "") {
      setError("Password cannot be Empty");
      return;
    }

    axios
      .post("http://localhost:8080/users", {
        name: nameRef.current.value,
        email: mailRef.current.value,
        password: pwRef.current.value,
      })
      .catch((err) => setError(err.message));
    setError("");
    navigate("/");
  };

  return { nameRef, mailRef, pwRef, cpwRef, error, addNewUser };
};

export default useSignup;