import styled, { css } from "styled-components";
import { isMobile } from "react-device-detect";

interface TitleProps {
  value: JSX.Element;
}

const StyledContent = styled.p`
  color: #000;
  font-family: sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;

  margin: 0;

  /* word-wrap: break-word; */
  /* word-break: break-all;  */
  hyphens: auto;

  ${isMobile
    ? css`
        font-size: 20px;
        line-height: 30px; /* 150% */
      `
    : css`
        font-size: 30px;
        line-height: 45px; /* 150% */
      `}
`;

const Content = ({ value }: TitleProps) => {
  return (
    <>
      <StyledContent lang="en">{value}</StyledContent>
    </>
  );
};
export default Content;
