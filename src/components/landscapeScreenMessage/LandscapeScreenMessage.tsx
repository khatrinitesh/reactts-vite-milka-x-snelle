import * as Styled from "./style";
const LandscapeScreenMessage = () => {
  return (
    <Styled.LandscapeScreenMessageLayout>
      <div>
        <Styled.LandscapeScreenImageMainContainer>
          <Styled.LandscapeScreenImageContainer>
            <Styled.LandscapeScreenImage
              src={`${import.meta.env.VITE_ASSET_URL}/img/chocoladebar-v1.png`}
              alt="img"
            />
          </Styled.LandscapeScreenImageContainer>
        </Styled.LandscapeScreenImageMainContainer>
        <Styled.LandscapeScreenText>
          Best view in portrait mode
        </Styled.LandscapeScreenText>
      </div>
    </Styled.LandscapeScreenMessageLayout>
  );
};

export default LandscapeScreenMessage;
