import { Input as InputAntd, InputProps as InputPropsAntd } from "antd";

import { BoxInput, TitleInput } from "./input.styles";

interface InputProps extends InputPropsAntd {
  title?: string;
}

const InputDefault = ({ title, ...props }: InputProps) => {
  return (
    <BoxInput>
      {title && <TitleInput>{title}</TitleInput>}

      <InputAntd {...props} />
    </BoxInput>
  );
};

export default InputDefault;
