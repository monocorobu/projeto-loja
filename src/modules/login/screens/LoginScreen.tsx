import { useState } from "react";

import Button from "../../../shared/componnents/buttons/button/button";
import SVGLogo from "../../../shared/componnents/icons/SVGLogo";
import InputDefault from "../../../shared/componnents/inputs/inputDefault/inputDefault";
import { useRequest } from "../../../shared/hooks/useRequests";
import {
  BackgroundDiv,
  ContainerLimited,
  ContainerLogin,
  ContainerScreenLogin,
  TitleLogin,
} from "../styles/loginScreen.styles";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { postRequest, loading } = useRequest();

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    postRequest("http://localhost:8080/auth", {
      data: {
        email: email,
        password: password,
      },
    });
  };

  return (
    <ContainerScreenLogin>
      <ContainerLogin>
        <ContainerLimited>
          <SVGLogo width="80%" object-fit=" cover" />
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
          <Button
            loading={loading}
            type={"primary"}
            margin="64px 0px 16px 0px"
            onClick={handleLogin}
          >
            LOGIN
          </Button>
        </ContainerLimited>
      </ContainerLogin>
      <BackgroundDiv />
    </ContainerScreenLogin>
  );
};

export default LoginScreen;
