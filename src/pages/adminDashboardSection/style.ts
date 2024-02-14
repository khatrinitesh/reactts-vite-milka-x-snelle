import styled from "styled-components";

export const AdminDashboardSectionWrapper = styled.div`
  margin: 16px 0;
`;
export const AdminDashboardSectionHeading = styled.div`
  font-size: 30px;
  font-family: SemiBoldFont;
  margin-top: 12px;
  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const AdminDashboardSectionGridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
  margin-top: 12px;
`;
