/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef, useEffect, useState } from "react";
import { ErrorMessage, Form, Formik } from "formik";
import InputField from "../../components/inputField/InputField";
import CheckBox from "../../components/checkBox/CheckBox";
import Button from "../../components/button/Button";
import { theme } from "../../styles/theme";
import * as Styled from "./style";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { format, subYears } from "date-fns";
import { browserName, osName, isMobile } from "react-device-detect";
import { useRegisterFormMutation } from "../../logic/reactQuery/mutation/useRegisterFormMutation";
import { useAppDispatch } from "../../logic/redux/store/hooks";
import { setLoggedIn, setUid } from "../../logic/redux/action/action";
import ErrorModal from "../../components/errorModal/ErrorModal";
import * as yup from "yup";
import * as SharedStyled from "../../styles/sharedStyle";
import { abusiveWords } from "../../utils/abusiveWords";
import { useLocation } from "react-router-dom";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import YourCodeModal from "../../components/yourCodeModal/YourCodeModal";
import { I_RegisterForm } from "../../interface";
import { useCheckSongsMutation } from "../../logic/reactQuery/mutation/useCheckSongMutation";
import InfoModal from "../../components/infoModal/InfoModal";
const registerValidation = yup.object().shape({
  code: yup
    .number()
    .typeError("Gelieve een geldig nummer invoeren")
    .required("Code is een verplicht veld"),
  firstName: yup
    .string()
    .trim()
    .test("no-invalid-words-after-space", "Beledigende woorden", (value) => {
      if (!value) {
        return true;
      }

      const words = value.split(" ");
      const invalidWordsFound = words.some((word) =>
        abusiveWords.includes(word)
      );

      return !invalidWordsFound;
    })

    .min(3, "Min. 3 karakters")
    .max(30, "Maximaal 30 tekens")
    .required("Voornaam is een verplicht veld"),
  lastName: yup
    .string()
    .trim()
    .test("no-invalid-words-after-space", "Beledigende woorden", (value) => {
      if (!value) {
        return true;
      }

      const words = value.split(" ");
      const invalidWordsFound = words.some((word) =>
        abusiveWords.includes(word)
      );

      return !invalidWordsFound;
    })

    .min(3, "Min. 3 karakters")
    .max(30, "Maximaal 30 tekens")
    .required("Achternaam is een verplicht veld"),
  email: yup
    .string()
    .trim()
    .email("Moet een geldig e-mailadres zijn")
    .required("E-mail is een verplicht veld"),
  dateOfBirth: yup
    .date()
    .required("Datum is een verplicht veld")
    .test("min-age", "Je moet minstens 18 jaar oud zijn", function (value) {
      const currentDate = new Date();
      const minAgeDate = new Date(currentDate);
      minAgeDate.setFullYear(minAgeDate.getFullYear() - 18);
      const selectedDate = new Date(value);
      return selectedDate <= minAgeDate;
    }),
});

const RegisterSection = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const utm_campaign = params.get("utm_campaign");
  const utm_content = params.get("utm_content");
  const utm_medium = params.get("utm_medium");
  const utm_source = params.get("utm_source");
  const utm_term = params.get("utm_term");

  const [selectedDate, setSelectedDate] = useState<any>(null);
  const initialValues: I_RegisterForm = {
    code: "",
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    firstCheck: false,
    secondCheck: false,
  };
  const dispatch = useAppDispatch();
  const { mutateAsync, isLoading, data } = useRegisterFormMutation();
  const { mutateAsync: mutateCheckSongs, isLoading: checkSongLoading } =
    useCheckSongsMutation();
  const [isErrorModalOpen, setIsErrorModalOpen] = useState<boolean>(false);
  const [isFirstNameInfoOpen, setIsFirstNameInfoOpen] =
    useState<boolean>(false);
  const [isLastNameInfoOpen, setIsLastNameInfoOpen] = useState<boolean>(false);
  const [isEmailInfoOpen, setIsEmailInfoOpen] = useState<boolean>(false);
  const [isDateInfoOpen, setIsDateInfoOpen] = useState<boolean>(false);

  const [isErrorModalSongLimitOpen, setIsErrorModalSongLimitOpen] =
    useState<boolean>(false);
  const [isYourCodeModalOpen, setIsYourCodeModalOpen] =
    useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFormSubmit = async (values: I_RegisterForm) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const formattedDate = format(new Date(values.dateOfBirth), "yyyy-MM-dd");
    const paramsData = {
      apikey: apiKey,
      code: values.code,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      dob: formattedDate,
      terms: values.firstCheck,
      promo: values.secondCheck,
      device: isMobile ? "Mobile" : "Desktop",
      os: osName,
      browser: browserName,
      utm_camp: utm_campaign || "",
      utm_content: utm_content || "",
      utm_medium: utm_medium || "",
      utm_src: utm_source || "",
      utm_term: utm_term || "",
    };
    const result = await mutateAsync(paramsData);
    if (result.data.success) {
      const songParamsData = {
        uid: result.data.uid,
        apikey: apiKey,
      };
      const songResult = await mutateCheckSongs(songParamsData);
      if (songResult.data.success) {
        localStorage.setItem("uid", result.data.uid);
        dispatch(setLoggedIn(true));
        dispatch(setUid(result.data.uid));
      } else {
        setIsErrorModalSongLimitOpen(true);
      }
    } else {
      setIsErrorModalOpen(true);
    }
  };

  const handleDateChange = (date: any, setFieldValue: any) => {
    setSelectedDate(date);
    setFieldValue("dateOfBirth", date);
  };

  const CustomDateInput = forwardRef(({ value, onClick }: any, ref: any) => (
    <>
      <Styled.RegisterDateContainer onClick={onClick} ref={ref}>
        <div>{value ? value : <span>Geboortedatum</span>}</div>
        <Styled.RegisterLogo
          onClick={(e: Event) => {
            e.stopPropagation();
            setIsDateInfoOpen(!isDateInfoOpen);
          }}
        >
          <AiOutlineQuestionCircle />
        </Styled.RegisterLogo>
      </Styled.RegisterDateContainer>
    </>
  ));

  const handleErrorModal = () => {
    setIsErrorModalOpen(!isErrorModalOpen);
  };

  const handleSongLimitErrorModal = () => {
    setIsErrorModalSongLimitOpen(!isErrorModalSongLimitOpen);
  };

  const handleYourCodeClick = () => {
    setIsYourCodeModalOpen(!isYourCodeModalOpen);
  };

  const maxDate = subYears(new Date(), 18);

  return (
    <div>
      <SharedStyled.OpacityAnimation>
        <SharedStyled.Container width="90%">
          <Formik
            initialValues={initialValues}
            onSubmit={handleFormSubmit}
            validationSchema={registerValidation}
          >
            {({ values, setFieldValue, isValid, errors }) => {
              return (
                <Form>
                  <Styled.RegisterSectionMainContainer>
                    <Styled.RegisterSectionLeftContainer>
                      <Styled.LeftImageContainer
                        src={`${
                          import.meta.env.VITE_ASSET_URL
                        }/img/heading-v1.png`}
                        alt="heading"
                      />
                    </Styled.RegisterSectionLeftContainer>
                    <Styled.RegisterSectionRightContainer>
                      <Styled.RegisterTextHeading>
                        REGISTREER OM EEN SONG MET SNELLE TE MAKEN
                      </Styled.RegisterTextHeading>
                      <InputField
                        type="text"
                        name="firstName"
                        placeholder="Wat is je voornaam?"
                        logo={<AiOutlineQuestionCircle />}
                        isLogo={true}
                        handleIconClick={() =>
                          setIsFirstNameInfoOpen(!isFirstNameInfoOpen)
                        }
                      />
                      <SharedStyled.ErrorMessageText>
                        <ErrorMessage name="firstName" />
                      </SharedStyled.ErrorMessageText>
                      <InputField
                        type="text"
                        name="lastName"
                        placeholder="Wat is je achternaam?"
                        logo={<AiOutlineQuestionCircle />}
                        isLogo={true}
                        handleIconClick={() =>
                          setIsLastNameInfoOpen(!isLastNameInfoOpen)
                        }
                      />
                      <SharedStyled.ErrorMessageText>
                        <ErrorMessage name="lastName" />
                      </SharedStyled.ErrorMessageText>
                      <InputField
                        type="text"
                        name="email"
                        placeholder="Wat is je emailadres?"
                        logo={<AiOutlineQuestionCircle />}
                        isLogo={true}
                        handleIconClick={() =>
                          setIsEmailInfoOpen(!isEmailInfoOpen)
                        }
                      />
                      <SharedStyled.ErrorMessageText>
                        <ErrorMessage name="email" />
                      </SharedStyled.ErrorMessageText>
                      <div>
                        <DatePicker
                          selected={selectedDate}
                          onChange={(date) =>
                            handleDateChange(date, setFieldValue)
                          }
                          customInput={<CustomDateInput />}
                          wrapperClassName="datepicker-wrapper"
                          showYearDropdown
                          showMonthDropdown
                          scrollableYearDropdown
                          yearDropdownItemNumber={50}
                          showPopperArrow={false}
                          maxDate={maxDate}
                          dateFormat="dd/MM/yyyy"
                          withPortal
                        />
                        <Styled.DateInputNone name="dateOfBirth" />
                        <SharedStyled.ErrorMessageText>
                          {values.dateOfBirth && errors.dateOfBirth
                            ? errors.dateOfBirth
                            : null}
                        </SharedStyled.ErrorMessageText>
                      </div>

                      <InputField
                        type="text"
                        name="code"
                        placeholder="Jouw streepjescode"
                        logo={<AiOutlineQuestionCircle />}
                        isLogo={true}
                        handleIconClick={handleYourCodeClick}
                      />
                      <SharedStyled.ErrorMessageText>
                        <ErrorMessage name="code" />
                      </SharedStyled.ErrorMessageText>

                      <Styled.CheckBoxWrapper>
                        <CheckBox
                          id="terms"
                          label={
                            <Styled.CheckBoxLabelContainer>
                              *Bij deze ga ik akkoord met de{" "}
                              <span
                                onClick={() =>
                                  window.open(
                                    `${
                                      import.meta.env.VITE_ASSET_URL
                                    }/pdf/Milka-x-Snelle-TnC-document-v1.pdf`
                                  )
                                }
                              >
                                Actievoorwaarden
                              </span>{" "}
                              &{" "}
                              <span>
                                <SharedStyled.StyledHyperLink
                                  target="_blank"
                                  href="https://privacy.mondelezinternational.com/eu/nl-NL/privacy-notice/"
                                >
                                  Privacyverklaring
                                </SharedStyled.StyledHyperLink>
                              </span>
                            </Styled.CheckBoxLabelContainer>
                          }
                          name="firstCheck"
                          value={values.firstCheck}
                          setFieldValue={setFieldValue}
                        />
                        <CheckBox
                          id="offers"
                          label={
                            <Styled.CheckBoxLabelContainer>
                              Ik geef Milka en Mondelez International de
                              toestemming om mijn persoonlijke informatie te
                              gebruiken om ervoor te zorgen dat toekomstige
                              communicatie, hetzij rechtstreeks via Milka en
                              Mondelez International, hetzij via erkende
                              partners, relevanter en meer gepersonaliseerd is.
                              Ik bevestig dat ik de&nbsp;
                              <span>
                                <SharedStyled.StyledHyperLink
                                  target="_blank"
                                  href="https://privacy.mondelezinternational.com/eu/nl-NL/privacy-notice/"
                                >
                                  Privacyverklaring
                                </SharedStyled.StyledHyperLink>
                              </span>{" "}
                              heb gelezen en begrepen. Milka is een merk van
                              Mondelez International.
                            </Styled.CheckBoxLabelContainer>
                          }
                          name="secondCheck"
                          value={values.secondCheck}
                          setFieldValue={setFieldValue}
                        />
                      </Styled.CheckBoxWrapper>
                      <Styled.RegisterSectionButtonWrapper>
                        <Button
                          text="Registreer nu"
                          bgColor={theme.buttonColor}
                          border={`1px solid ${theme.buttonColor}`}
                          textColor={theme.white}
                          type="submit"
                          isLoading={isLoading || checkSongLoading}
                          disabled={
                            !(
                              values.code &&
                              values.dateOfBirth &&
                              values.email &&
                              values.firstName &&
                              values.firstCheck
                            ) ||
                            isLoading ||
                            checkSongLoading ||
                            !isValid
                          }
                        />
                      </Styled.RegisterSectionButtonWrapper>
                    </Styled.RegisterSectionRightContainer>
                    <ErrorModal
                      message={`Oeps.. ${values.firstName},
        Het lijkt erop dat jij al 2 persoonlijke video’s hebt gegenereerd met jouw Milka product met code {EAN code}. Je mag natuurlijk meer video’s maken met Snelle en AI, maar wel met een ander product van Milka. Ga naar de winkel, koop een andere Milka en maak jouw volgende persoonlijke video met Milka x Snelle x AI. Liefs, Milka - Teder smaakt beter
        `}
                      handleError={handleSongLimitErrorModal}
                      isModalOpen={isErrorModalSongLimitOpen}
                    />
                  </Styled.RegisterSectionMainContainer>
                </Form>
              );
            }}
          </Formik>
        </SharedStyled.Container>
      </SharedStyled.OpacityAnimation>

      <ErrorModal
        message={data?.data?.message}
        handleError={handleErrorModal}
        isModalOpen={isErrorModalOpen}
      />

      <YourCodeModal
        isYourCodeModalOpen={isYourCodeModalOpen}
        setIsYourCodeModalOpen={setIsYourCodeModalOpen}
      />
      <InfoModal
        heading="Waarom hebben we je naam nodig?"
        description="We hebben je naam nodig zodat de ontvanger van de video weet wie het heeft verzonden. Het is belangrijk om te weten wie de afzender is, vooral als het gaat om persoonlijke communicatie. Je naam zal alleen worden gebruikt voor dit doel en zal niet worden gedeeld met derden."
        isInfoModalOpen={isFirstNameInfoOpen}
        setIsInfoModalOpen={setIsFirstNameInfoOpen}
      />
      <InfoModal
        heading="Waarom hebben we je naam nodig?"
        description="We hebben je naam nodig zodat de ontvanger van de video weet wie het heeft verzonden. Het is belangrijk om te weten wie de afzender is, vooral als het gaat om persoonlijke communicatie. Je naam zal alleen worden gebruikt voor dit doel en zal niet worden gedeeld met derden."
        isInfoModalOpen={isLastNameInfoOpen}
        setIsInfoModalOpen={setIsLastNameInfoOpen}
      />
      <InfoModal
        heading="Waarom hebben je e-mailadres nodig?"
        description="We hebben je e-mailadres nodig om te registreren wie de video heeft verzonden. Dit is belangrijk voor het bijhouden van communicatie en het bieden van een betere gebruikerservaring. Je e-mailadres zal alleen worden gebruikt voor dit doel en zal niet worden gedeeld met derden."
        isInfoModalOpen={isEmailInfoOpen}
        setIsInfoModalOpen={setIsEmailInfoOpen}
      />
      <InfoModal
        heading="Waarom hebben je geboortedatum nodig?"
        description="We hebben je geboortedatum nodig om te verifiëren dat je 18 jaar of ouder bent en dus in aanmerking komt om deel te nemen. Dit is belangrijk omdat sommige van onze diensten alleen beschikbaar zijn voor volwassenen. Je geboortedatum zal alleen worden gebruikt voor dit doel en zal niet worden gedeeld met derden."
        isInfoModalOpen={isDateInfoOpen}
        setIsInfoModalOpen={setIsDateInfoOpen}
      />
    </div>
  );
};

export default RegisterSection;
