import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> E-Commerce Application</span>
      </h5>
      <h5>All rights reserved</h5>
    </Container>
  );
};
const Container = styled.footer`
  height: 5rem;
  background: var(--clr-brown);
  color: var(--clr-white);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h5 {
    line-height: 1.55;
    font-weight: 400;
  }
`;

export default Footer;
