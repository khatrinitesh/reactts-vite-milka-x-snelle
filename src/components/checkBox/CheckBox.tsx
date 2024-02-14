import { I_CheckBoxProps } from "../../interface";
import * as Styled from "./style";

const CheckBox = ({
  id,
  name,
  label,
  value,
  setFieldValue,
}: I_CheckBoxProps) => {
  return (
    <Styled.CheckBoxLayout key={id}>
      <Styled.CheckBoxContainer htmlFor={id} value={value}>
        <Styled.CheckBoxInputField
          id={id}
          type="checkbox"
          name={name}
          value={value}
          onChange={() => setFieldValue(name, !value)}
        />
      </Styled.CheckBoxContainer>
      <Styled.CheckBoxLabel>{label}</Styled.CheckBoxLabel>
    </Styled.CheckBoxLayout>
  );
};

export default CheckBox;
