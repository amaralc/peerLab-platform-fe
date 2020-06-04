import React from 'react';

import SideMenu from '../../components/SideMenu';
import CentralContent from '../../components/CentralContent';

export default function Home() {
  return (
    <>
      <SideMenu />
      <CentralContent title="Todas as categorias" />
    </>
  );
}
