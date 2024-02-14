/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { ErrorMessage, Field, Form, Formik } from "formik";
import InputField from "../../../../components/inputField/InputField";
import * as SharedStyled from "../../../../styles/sharedStyle";
import * as Styled from "./style";
import { theme } from "../../../../styles/theme";
import Button from "../../../../components/button/Button";
import { memo, useEffect, useState } from "react";
import { I_GenerateSongSection, I_SongProps } from "../../../../interface";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
// import { AiOutlineQuestionCircle } from "react-icons/ai";
import { dropDownData } from "./dropDownData";
import InfoModal from "../../../../components/infoModal/InfoModal";
import { HiPlus, HiMinus } from "react-icons/hi";

const GenerateSongSection = ({
  next,
  data,
  validate,
  generateLyricsLoading,
  handleLyricsGenerate,
  isDropDownOpen,
  setDropDownValue,
  setIsDropDownOpen,
  dropDownValue,
}: I_GenerateSongSection) => {
  const [isInfoModalOpen, setIsInfoModalOpen] = useState<boolean>(false);
  const [isToggleOpen, setIsToggleOpen] = useState<any>(0);

  const handleToggle = (index: number) => {
    setIsToggleOpen(isToggleOpen === index ? null : index);
  };

  const handleSubmitForm = async (values: I_SongProps) => {
    await handleLyricsGenerate(values);
    next(values);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const yourText =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut non provident ducimus, eius ratione consectetur doloribus odio, quisquam, dolorem optio voluptate voluptatem velit. Voluptatibus ex sit nam error eius nobis.";
  return (
    <SharedStyled.OpacityAnimation>
      <SharedStyled.Container width="90%">
        <Formik
          initialValues={data}
          onSubmit={handleSubmitForm}
          validationSchema={validate}
        >
          {({ isValid, isSubmitting }) => (
            <Form>
              <Styled.GenerateSongMainContainer>
                <Styled.GenerateSongContainer>
                  {/* <SharedStyled.HeadingText>
                    Enter your loved one's details to generate a unique song by
                    Snelle for them
                  </SharedStyled.HeadingText> */}
                  <Styled.GenerateSongInputMainContainer>
                    <Styled.GenerateSongInputContainer>
                      <Styled.GenerateSongInputWrapper>
                        <Styled.GenerateSongLabel>
                          VOOR WIE IS DIT LIEDJE?&nbsp;<span>(NAAM)</span>
                        </Styled.GenerateSongLabel>
                        <InputField
                          name="name"
                          placeholder="Naam"
                          type="text"
                          disabled={isSubmitting}
                        />
                        <SharedStyled.ErrorMessageText>
                          <ErrorMessage name="name" />
                        </SharedStyled.ErrorMessageText>
                      </Styled.GenerateSongInputWrapper>
                      <Styled.GenerateSongInputWrapper>
                        <Styled.GenerateSongLabel>
                          WAT IS JULLIE BAND?
                        </Styled.GenerateSongLabel>
                        <Styled.GenerateSongDropDownMainContainer>
                          <Styled.GenerateSongDropDownField
                            disabled={generateLyricsLoading}
                            onClick={() => setIsDropDownOpen(!isDropDownOpen)}
                          >
                            {dropDownValue === "" ? (
                              <span>Collega's</span>
                            ) : (
                              dropDownValue
                            )}
                            <Styled.DiGenerateSongDropDownIconContainer>
                              <Styled.GenerateSongDropDownIcon>
                                {!isDropDownOpen ? (
                                  <BiSolidDownArrow />
                                ) : (
                                  <BiSolidUpArrow />
                                )}
                              </Styled.GenerateSongDropDownIcon>
                              {/* <Styled.GenerateSongDropDownIcon
                                onClick={(e: Event) => {
                                  e.stopPropagation();
                                  setIsInfoModalOpen(!isInfoModalOpen);
                                }}
                              >
                                <AiOutlineQuestionCircle
                                  style={{ color: "#808080" }}
                                />
                              </Styled.GenerateSongDropDownIcon> */}
                            </Styled.DiGenerateSongDropDownIconContainer>
                          </Styled.GenerateSongDropDownField>
                          {isDropDownOpen && (
                            <Styled.GenerateSongDropDown>
                              {dropDownData.map((value, index: number) => (
                                <>
                                  <Styled.GenerateSongDropDownContent
                                    key={value.id}
                                    fontFamily="SemiBoldFont"
                                    bgColor={theme.buttonColor}
                                    color={theme.white}
                                    onClick={() => handleToggle(index)}
                                  >
                                    <Styled.GenerateSongDropDownToggleIconWrapper>
                                      <div>{value.label}</div>
                                      <Styled.GenerateSongDropDownIcon>
                                        {isToggleOpen === index ? (
                                          <HiMinus />
                                        ) : (
                                          <HiPlus />
                                        )}
                                      </Styled.GenerateSongDropDownIcon>
                                    </Styled.GenerateSongDropDownToggleIconWrapper>
                                  </Styled.GenerateSongDropDownContent>

                                  {isToggleOpen === index &&
                                    value.value.map((val, i: number) => (
                                      <Styled.GenerateSongDropDownContent
                                        key={i}
                                        fontFamily="RegularFont"
                                        onClick={() => {
                                          setDropDownValue(val);
                                          setIsDropDownOpen(!isDropDownOpen);
                                        }}
                                        color={theme.black}
                                      >
                                        {val}
                                      </Styled.GenerateSongDropDownContent>
                                    ))}
                                </>
                              ))}
                            </Styled.GenerateSongDropDown>
                          )}
                        </Styled.GenerateSongDropDownMainContainer>
                      </Styled.GenerateSongInputWrapper>
                      <Styled.GenerateSongInputWrapper>
                        <Styled.GenerateSongLabel>
                          JE BERICHT&nbsp;
                          <span>(MINIMAAL 20 EN MAXIMAAL 100 TEKENS)</span>
                        </Styled.GenerateSongLabel>
                        <Styled.GenerateSongTextAreaContainer>
                          <Field
                            as="textarea"
                            placeholder="Voor het urenlang oefenen voor mijn rijexamen; jouw geduld is goud waard"
                            name="message"
                            className="input-textarea"
                            disabled={isSubmitting}
                          />
                        </Styled.GenerateSongTextAreaContainer>
                        <SharedStyled.ErrorMessageText>
                          <ErrorMessage name="message" />
                        </SharedStyled.ErrorMessageText>
                      </Styled.GenerateSongInputWrapper>
                      <Styled.GenerateSongButtonWrapper>
                        <Button
                          text="Volgende"
                          bgColor={theme.buttonColor}
                          border={`1px solid ${theme.buttonColor}`}
                          textColor={theme.white}
                          type="submit"
                          isLoading={generateLyricsLoading}
                          disabled={
                            !isValid ||
                            generateLyricsLoading ||
                            dropDownValue === ""
                          }
                        />
                      </Styled.GenerateSongButtonWrapper>
                    </Styled.GenerateSongInputContainer>
                  </Styled.GenerateSongInputMainContainer>
                </Styled.GenerateSongContainer>
              </Styled.GenerateSongMainContainer>
            </Form>
          )}
        </Formik>
      </SharedStyled.Container>
      <InfoModal
        heading="Uitleg"
        description={yourText}
        isInfoModalOpen={isInfoModalOpen}
        setIsInfoModalOpen={setIsInfoModalOpen}
      />
    </SharedStyled.OpacityAnimation>
  );
};

export default memo(GenerateSongSection);
