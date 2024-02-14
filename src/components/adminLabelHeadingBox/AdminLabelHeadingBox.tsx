import { I_AdminLabelHeadingBox } from "../../interface";
import * as Styled from "./style";

const AdminLabelHeadingBox = ({
  children,
  heading,
}: I_AdminLabelHeadingBox) => {
  return (
    <Styled.AdminLabelHeadingBoxContainer>
      <Styled.AdminLabelHeading>{heading}</Styled.AdminLabelHeading>
      <div>{children}</div>
    </Styled.AdminLabelHeadingBoxContainer>
  );
};

export default AdminLabelHeadingBox;
