import * as SharedStyled from "../../styles/sharedStyle";
import * as Styled from "./style";
import InputField from "../../components/inputField/InputField";
import { Form, Formik } from "formik";
import { theme } from "../../styles/theme";
import Button from "../../components/button/Button";
import { I_AdminLoginForm } from "../../interface";
const AdminLoginSection = () => {
  const initialValues: I_AdminLoginForm = {
    username: "",
    password: "",
  };

  const handleFormSubmit = (values: I_AdminLoginForm) => {
    console.log(values);
  };

  return (
    <div>
      <SharedStyled.OpacityAnimation>
        <SharedStyled.Container width="90%">
          <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
            {({ values }) => (
              <Form>
                <Styled.AdminLoginSectionContainer>
                  <Styled.AdminLoginSectionFirstContainer>
                    <Styled.AdminLoginSectionImageContainer>
                      <Styled.AdminLoginSectionImage
                        src={`${
                          import.meta.env.VITE_ASSET_URL
                        }/img/heading-v1.png`}
                        alt="heading"
                      />
                    </Styled.AdminLoginSectionImageContainer>
                  </Styled.AdminLoginSectionFirstContainer>
                  <Styled.AdminLoginSectionSecondContainer>
                    <Styled.AdminLoginInputContainer>
                      <Styled.AdminLoginHeading>
                        Milka-Snelle
                      </Styled.AdminLoginHeading>
                      <Styled.AdminLoginText>
                        Login to Admin Dashboard
                      </Styled.AdminLoginText>
                      <Styled.AdminLoginInputWrapper>
                        <InputField
                          type="text"
                          name="username"
                          placeholder="Username"
                        />
                      </Styled.AdminLoginInputWrapper>
                      <Styled.AdminLoginInputWrapper>
                        <InputField
                          type="password"
                          name="password"
                          placeholder="Password"
                        />
                      </Styled.AdminLoginInputWrapper>
                      <Styled.AdminLoginButtonContainer>
                        <Button
                          text="Login"
                          bgColor={theme.buttonColor}
                          border={`1px solid ${theme.buttonColor}`}
                          textColor={theme.white}
                          type="submit"
                          disabled={!(values.username && values.password)}
                        />
                      </Styled.AdminLoginButtonContainer>
                    </Styled.AdminLoginInputContainer>
                  </Styled.AdminLoginSectionSecondContainer>
                </Styled.AdminLoginSectionContainer>
              </Form>
            )}
          </Formik>
        </SharedStyled.Container>
      </SharedStyled.OpacityAnimation>
    </div>
  );
};

export default AdminLoginSection;
