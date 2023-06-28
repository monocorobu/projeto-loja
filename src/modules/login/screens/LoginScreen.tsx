import InputDefault from "../../../shared/inputs/inputDefault/inputDefault";
import {
  BackgroundDiv,
  ContainerLimited,
  ContainerLogin,
  ContainerScreenLogin,
  LogoImage,
} from "../styles/loginScreen.styles";

const LoginScreen = () => {
  return (
    <ContainerScreenLogin>
      <ContainerLogin>
        <ContainerLimited>
          <LogoImage src="./logo.png" />
          <InputDefault title="User" />
          <InputDefault title="Password" />
        </ContainerLimited>
      </ContainerLogin>
      <BackgroundDiv />
    </ContainerScreenLogin>
  );
};

export default LoginScreen;
