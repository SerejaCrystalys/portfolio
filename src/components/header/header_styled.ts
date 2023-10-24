import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: calc(100% - 120px);
  height: 50px;
  padding: 0px 60px;
  background-color: var(--color-white);

  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;

  z-index: 1000;
`;
