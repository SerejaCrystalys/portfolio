import styled, { css } from "styled-components";
import { isMobile } from "react-device-detect";

interface TitleProps {
  value: JSX.Element;
}

const StyledTitle = styled.h2`
  color: #1a1a1c;
  font-family: sans-serif;

  font-style: normal;
  font-weight: 600;
  line-height: normal;
  ${isMobile
    ? css`
        font-size: 32px;
      `
    : css`
        font-size: 96px;
      `}
`;

const Title = ({ value }: TitleProps) => {
  return (
    <>
      <StyledTitle>{value}</StyledTitle>
    </>
  );
};
export default Title;
