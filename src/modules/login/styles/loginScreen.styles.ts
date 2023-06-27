import styled from "styled-components";

interface ColorsPalette {
  primary100?: string;
  primary200?: string;
  primary300?: string;
  accent100?: string;
  accent200?: string;
  accent300?: string;
  text100?: string;
  text200?: string;
  bg100?: string;
  bg200?: string;
}

const colors: ColorsPalette = {
  primary100: "#FF0000",
  primary200: "#FF5A36",
  primary300: "#000000",
  accent100: "#FFA500",
  accent200: "#FFC993",
  accent300: "#904A00",
  text100: "#FFFFFF",
  text200: "#161616",
  bg100: "#2C2C2C",
  bg200: "#E0E0E0",
};

export const BackgroundDiv = styled.div`
  position: relative;
  background: ${colors.bg200};
  color: ${colors.text200};
  height: 100vh;
  font-size: 16pt;
`;

export const ContainerScreenLogin = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
`;

export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.bg100};
  padding: 22px;
  height: 100vh;
  width: 100%;
  max-width: 646px;
`;

export const LogoImage = styled.img`
  width: 50%;
  object-fit: cover;
`;

export const ContainerLimited = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  max-width: 498px;
`;
