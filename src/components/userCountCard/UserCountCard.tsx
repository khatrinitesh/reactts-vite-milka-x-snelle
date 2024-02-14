import * as Styled from "./style";
import { I_UserCountCard } from "../../interface";

const UserCountCard = ({ icon, count, label }: I_UserCountCard) => {
  return (
    <Styled.UserCountCardContainer>
      <Styled.UserCountCardIconContainer>
        {icon}
      </Styled.UserCountCardIconContainer>
      <div>
        <Styled.UserCount>{count}</Styled.UserCount>
        <Styled.UserCountLabel>{label}</Styled.UserCountLabel>
      </div>
    </Styled.UserCountCardContainer>
  );
};

export default UserCountCard;
