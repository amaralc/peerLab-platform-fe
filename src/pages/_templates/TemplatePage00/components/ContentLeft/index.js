import React from 'react';
import { Container, Title, List } from './styles';
import SideBarItem from '../../../../../components/SideBarItem';
import SideBarLabCard from '../../../../../components/SideBarLabCard';
import SideBarLabCard2 from '../../../../../components/SideBarLabCard2';

import Lmp from '../../img/lmp.png';

export default function ContentLeft() {
  return (
    <Container>
      <div>
        <Title>Template Title 01</Title>
        <List>
          <SideBarItem itemName="Template Item 01" />
          <SideBarItem itemName="Template Item 02" />
          <SideBarItem itemName="Template Item 03" />
        </List>
      </div>
      <div>
        <Title>Template Title 02</Title>
        <List>
          <SideBarLabCard
            title="LMP"
            subtitle="Laboratório de Mecânica de Precisão"
            imgPath={Lmp}
          />
          <SideBarLabCard2
            title="LABSOLDA"
            subtitle="Instituto de Soldagem e Mecatrônica"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          egestas mi commodo, hendrerit urna ut, feugiat purus. Nulla volutpat, erat."
            imgPath={Lmp}
          />
        </List>
      </div>
    </Container>
  );
}
