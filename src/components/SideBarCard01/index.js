import React from 'react';

import { Container, Image, InfoContainer, InfoTitle, InfoText } from './styles';

export default function SideBarCard01(props) {
  return (
    <>
      <Container href={props.url}>
        <Image src={props.imgPath} alt="" />
        <InfoContainer>
          <InfoTitle>{props.title}</InfoTitle>
          <InfoText>{props.subtitle}</InfoText>
        </InfoContainer>
      </Container>
    </>
  );
}
