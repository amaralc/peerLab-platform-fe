import React from 'react';

// import { Container } from './styles';
import ContentLeft from './components/ContentLeft';
import ContentRight from './components/ContentRight';
import ContentCenter from './components/ContentCenter';

export default function Page01() {
  return (
    <>
      <ContentLeft />
      <ContentCenter />
      <ContentRight />
    </>
  );
}
