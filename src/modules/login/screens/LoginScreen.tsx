import axios from "axios";
import { useState } from "react";

import Button from "../../../shared/buttons/button/button";
import InputDefault from "../../../shared/inputs/inputDefault/inputDefault";
import {
  BackgroundDiv,
  ContainerLimited,
  ContainerLogin,
  ContainerScreenLogin,
  LogoImage,
  TitleLogin,
} from "../styles/loginScreen.styles";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    const returnObeject = await axios({
      method: "post",
      url: "http://localhost:8080/auth",
      data: {
        email: email,
        password: password,
      },
    })
      .then((result) => {
        alert(`fez login token: ${result.data.accessToken}`);
        return result.data;
      })
      .catch(() => {
        alert("Usuario ou senha invalido");
      });
  };

  return (
    <ContainerScreenLogin>
      <ContainerLogin>
        <ContainerLimited>
          <LogoImage src="./logo.png" />
          <TitleLogin level={2}>LOGIN</TitleLogin>
          <InputDefault
            title="Email "
            margin="32px 0px 0px 0px"
            onChange={handleEmail}
            value={email}
          />
          <InputDefault
            title="Password"
            type="password"
            margin="32px 0px 0px 0px"
            onChange={handlePassword}
            value={password}
          />
          <Button type={"primary"} margin="64px 0px 16px 0px" onClick={handleLogin}>
            LOGIN
          </Button>
        </ContainerLimited>
      </ContainerLogin>
      <BackgroundDiv />
    </ContainerScreenLogin>
  );
};

export default LoginScreen;
