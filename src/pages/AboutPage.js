import React from "react";
import styled from "styled-components";
import aboutImg from "../assets/hero.jpeg";

const About = () => {
  return (
    <Wrapper className="page section section-center">
      <img src={aboutImg} alt="nice page" />
      <article>
        <div className="title">
          <h2>Our Story</h2>
          <div className="underline"></div>
        </div>
      </article>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
        accusantium sapiente tempora sed dolore esse deserunt eaque excepturi,
        delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta.
        Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt
        sequi blanditiis est exercitationem molestiae delectus saepe odio
        eligendi modi porro eaque in libero minus unde sapiente consectetur
        architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum
        totam velit saepe sed quos similique amet. Ex, voluptate accusamus
        nesciunt totam vitae esse iste.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
display: grid;
gap:4rem;
img{
    width:100%;
    display: block;
    height: 500px;
    object-fit: cover;
    border-radius: 5px;;
}
p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
@media (min-width:992px){
    grid-template-columns: 1fr 1fr;;
}

`;

export default About;
