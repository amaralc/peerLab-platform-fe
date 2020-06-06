import React from 'react';
import CentralContent from '../../../../components/CentralContent';
import CentralCategoriesList from '../../../../components/CentralCategoriesList';
import IconCard from '../../../../components/IconCard';
import Microscope from '../../img/microscope.png';

function CentralContentLocal() {
  return (
    <CentralContent title="Todas as subcategorias">
      <CentralCategoriesList title="Grupo 01">
        <IconCard
          cardText="Item"
          cardImgSrc={Microscope}
          cardRoute="/page-02"
        />
        <IconCard
          cardText="Item"
          cardImgSrc={Microscope}
          cardRoute="/page-02"
        />
        <IconCard
          cardText="Item"
          cardImgSrc={Microscope}
          cardRoute="/page-02"
        />
        <IconCard
          cardText="Item"
          cardImgSrc={Microscope}
          cardRoute="/page-02"
        />
        <IconCard
          cardText="Item"
          cardImgSrc={Microscope}
          cardRoute="/page-02"
        />
      </CentralCategoriesList>
      <CentralCategoriesList title="Grupo 02">
        <IconCard
          cardText="Item"
          cardImgSrc={Microscope}
          cardRoute="/page-02"
        />
        <IconCard
          cardText="Item"
          cardImgSrc={Microscope}
          cardRoute="/page-02"
        />
        <IconCard
          cardText="Item"
          cardImgSrc={Microscope}
          cardRoute="/page-02"
        />
        <IconCard
          cardText="Item"
          cardImgSrc={Microscope}
          cardRoute="/page-02"
        />
        <IconCard
          cardText="Item"
          cardImgSrc={Microscope}
          cardRoute="/page-02"
        />
      </CentralCategoriesList>
      <CentralCategoriesList title="Grupo 03">
        <IconCard
          cardText="Item"
          cardImgSrc={Microscope}
          cardRoute="/page-02"
        />
        <IconCard
          cardText="Item"
          cardImgSrc={Microscope}
          cardRoute="/page-02"
        />
        <IconCard
          cardText="Item"
          cardImgSrc={Microscope}
          cardRoute="/page-02"
        />
        <IconCard
          cardText="Item"
          cardImgSrc={Microscope}
          cardRoute="/page-02"
        />
        <IconCard
          cardText="Item"
          cardImgSrc={Microscope}
          cardRoute="/page-02"
        />
      </CentralCategoriesList>
      <CentralCategoriesList title="Grupo 04">
        <IconCard
          cardText="Item"
          cardImgSrc={Microscope}
          cardRoute="/page-02"
        />
        <IconCard
          cardText="Item"
          cardImgSrc={Microscope}
          cardRoute="/page-02"
        />
        <IconCard
          cardText="Item"
          cardImgSrc={Microscope}
          cardRoute="/page-02"
        />
        <IconCard
          cardText="Item"
          cardImgSrc={Microscope}
          cardRoute="/page-02"
        />
        <IconCard
          cardText="Item"
          cardImgSrc={Microscope}
          cardRoute="/page-02"
        />
      </CentralCategoriesList>
      <CentralCategoriesList title="Grupo 05">
        <IconCard
          cardText="Item"
          cardImgSrc={Microscope}
          cardRoute="/page-02"
        />
        <IconCard
          cardText="Item"
          cardImgSrc={Microscope}
          cardRoute="/page-02"
        />
        <IconCard
          cardText="Item"
          cardImgSrc={Microscope}
          cardRoute="/page-02"
        />
        <IconCard
          cardText="Item"
          cardImgSrc={Microscope}
          cardRoute="/page-02"
        />
        <IconCard
          cardText="Item"
          cardImgSrc={Microscope}
          cardRoute="/page-02"
        />
      </CentralCategoriesList>
    </CentralContent>
  );
}

export default CentralContentLocal;