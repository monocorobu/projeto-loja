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
        </ContainerLimited>
      </ContainerLogin>
      <BackgroundDiv />
    </ContainerScreenLogin>
  );
};

export default LoginScreen;