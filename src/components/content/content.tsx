import styled, { css } from "styled-components";
import { isMobile } from "react-device-detect";

interface TitleProps {
  value: JSX.Element;
}

const StyledContent = styled.h2`
  color: #000;
  font-family: sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 45px; /* 150% */
  ${isMobile
    ? css`
        font-size: 32px;
      `
    : css`
        font-size: 30px;
      `}
`;

const Content = ({ value }: TitleProps) => {
  return (
    <>
      <StyledContent>{value}</StyledContent>
    </>
  );
};
export default Content;
