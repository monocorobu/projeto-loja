import { Typography } from "antd";
import styled from "styled-components";

import colors from "../../../shared/componnents/colors/colorspalettes";

const { Title } = Typography;

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

export const TitleLogin = styled(Title)`
  && {
    font-size: 32pt;
    color: ${colors.accent100};
  }
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

export const ContainerLimited = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 498px;
`;
