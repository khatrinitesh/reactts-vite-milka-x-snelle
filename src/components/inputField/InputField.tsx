import { I_InputProps } from "../../interface";
import * as Styled from "./style";

const InputField = ({
  type,
  name,
  placeholder,
  logo,
  isLogo,
  disabled,
  handleIconClick,
}: I_InputProps) => {
  return (
    <Styled.InputFieldMainContainer>
      <Styled.InputFieldContainer>
        <Styled.InputBox
          type={type}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
        />
        {isLogo && (
          <Styled.InputIconContainer onClick={handleIconClick}>
            {logo}
          </Styled.InputIconContainer>
        )}
      </Styled.InputFieldContainer>
    </Styled.InputFieldMainContainer>
  );
};

export default InputField;
