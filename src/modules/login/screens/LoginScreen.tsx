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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    console.log(username, password);
  };

  return (
    <ContainerScreenLogin>
      <ContainerLogin>
        <ContainerLimited>
          <LogoImage src="./logo.png" />
          <TitleLogin level={2}>LOGIN</TitleLogin>
          <InputDefault
            title="Username "
            margin="32px 0px 0px 0px"
            onChange={handleUsername}
            value={username}
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
