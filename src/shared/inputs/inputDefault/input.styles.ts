import { Space, Typography } from "antd";
import styled from "styled-components";

import colors from "../../colors/colorspalettes";

const { Text, Link } = Typography;

export const BoxInput = styled.div`
  width: 100%;
`;

export const TitleInput = styled(Text)`
  color: ${colors.text100};

  margin: 8px;
`;
