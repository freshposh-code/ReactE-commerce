import styled from "@emotion/styled";
import React from "react";
import { sliderItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const ImgContainer = styled.div`
  height: 100%;
`;
const Image = styled.img`
  height: 80%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  margin-bottom: 5rem;
`;

const Title = styled.h1`
  font-size: 60px;
`;
const Desc = styled.p`
  margin: 50px 0;
  letter-spacing: 3px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background: black;
  color: aliceblue;
  cursor: pointer;
  font-family: fantasy;

  &:hover {
    background: #fff;
    color: #151618;

    transition: all 1s ease-in-out;
  }
`;

const Slider = () => {
  return (
    <Container>
      <Wrapper>
        {sliderItems.map((item) => (
          <Slide bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Slider;

// onClick={handleClick("right")s
