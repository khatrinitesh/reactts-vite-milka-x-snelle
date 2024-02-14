import { IoEarth, IoLogoApple } from "react-icons/io5";
import { SiWindows10 } from "react-icons/si";
import { BsAndroid2 } from "react-icons/bs";
import AdminLabelHeadingBox from "../../components/adminLabelHeadingBox/AdminLabelHeadingBox";
import UserCountCard from "../../components/userCountCard/UserCountCard";
import * as SharedStyled from "../../styles/sharedStyle";
import * as Styled from "./style";

const AdminDashboardSection = () => {
  return (
    <div>
      <SharedStyled.OpacityAnimation>
        <SharedStyled.Container width="90%">
          <Styled.AdminDashboardSectionHeading>
            Overall Total: Registration = 137
          </Styled.AdminDashboardSectionHeading>
          <Styled.AdminDashboardSectionWrapper>
            <AdminLabelHeadingBox heading="User Traffic">
              <Styled.AdminDashboardSectionGridLayout>
                <UserCountCard icon={<IoEarth />} count="20" label="Total" />
                <UserCountCard
                  icon={<SiWindows10 />}
                  count="20"
                  label="Desktop"
                />
                <UserCountCard
                  icon={<BsAndroid2 />}
                  count="20"
                  label="Android"
                />
                <UserCountCard icon={<IoLogoApple />} count="20" label="IOS" />
              </Styled.AdminDashboardSectionGridLayout>
            </AdminLabelHeadingBox>
          </Styled.AdminDashboardSectionWrapper>
          <Styled.AdminDashboardSectionWrapper>
            <AdminLabelHeadingBox heading="Registration">
              <Styled.AdminDashboardSectionGridLayout>
                <UserCountCard icon={<IoEarth />} count="20" label="Total" />
                <UserCountCard
                  icon={<SiWindows10 />}
                  count="20"
                  label="Desktop"
                />
                <UserCountCard
                  icon={<BsAndroid2 />}
                  count="20"
                  label="Android"
                />
                <UserCountCard icon={<IoLogoApple />} count="20" label="IOS" />
              </Styled.AdminDashboardSectionGridLayout>
            </AdminLabelHeadingBox>
          </Styled.AdminDashboardSectionWrapper>
        </SharedStyled.Container>
      </SharedStyled.OpacityAnimation>
    </div>
  );
};

export default AdminDashboardSection;
