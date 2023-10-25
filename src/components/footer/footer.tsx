import styled from "styled-components";

const FooterBody = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  bottom: 0;
  width: 100%;
  z-index: 100;
`;

const Footer = () => {
  return (
    <>
      <FooterBody>© Sergey, 2023</FooterBody>
    </>
  );
};

export default Footer;
