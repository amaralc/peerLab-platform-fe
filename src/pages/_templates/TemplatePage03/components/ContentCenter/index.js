import React from 'react';
import { Container, Title } from './styles';

import CentralListOfCategories01 from '../../../../../components/CentralListOfCategories01';
import CentralCard02 from '../../../../../components/CentralCard02';

import Ensaio from '../../img/Ensaio.jpg';

export default function ContentCenter() {
  return (
    <Container>
      <Title>Todas as categorias</Title>
      <CentralListOfCategories01 title="Grupo 01">
        <CentralCard02
          imgPath={Ensaio}
          title="Ensaio de tração"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        egestas mi commodo, hendrerit urna ut, feugiat purus. Nulla volutpat, erat."
          contact="(48)999999999"
          url="/"
          button="Solicite"
        />
        <CentralCard02
          imgPath={Ensaio}
          title="Ensaio de tração"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        egestas mi commodo, hendrerit urna ut, feugiat purus. Nulla volutpat, erat."
          contact="(48)999999999"
          url="/"
          button="Solicite"
        />
      </CentralListOfCategories01>
      <CentralListOfCategories01 title="Grupo 02">
        <CentralCard02
          imgPath={Ensaio}
          title="Ensaio de tração"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        egestas mi commodo, hendrerit urna ut, feugiat purus. Nulla volutpat, erat."
          contact="(48)999999999"
          url="/"
          button="Solicite"
        />
        <CentralCard02
          imgPath={Ensaio}
          title="Ensaio de tração"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        egestas mi commodo, hendrerit urna ut, feugiat purus. Nulla volutpat, erat."
          contact="(48)999999999"
          url="/"
          button="Solicite"
        />
      </CentralListOfCategories01>
      <CentralListOfCategories01 title="Grupo 03">
        <CentralCard02
          imgPath={Ensaio}
          title="Ensaio de tração"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        egestas mi commodo, hendrerit urna ut, feugiat purus. Nulla volutpat, erat."
          contact="(48)999999999"
          url="/"
          button="Solicite"
        />
        <CentralCard02
          imgPath={Ensaio}
          title="Ensaio de tração"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        egestas mi commodo, hendrerit urna ut, feugiat purus. Nulla volutpat, erat."
          contact="(48)999999999"
          url="/"
          button="Solicite"
        />
      </CentralListOfCategories01>
    </Container>
  );
}
