import Image from "next/image";
import Camisa from '../../assets/camisa1.png'

import { ContainerShopMarket, ProductList, ImageContainer } from "../../styles/pages/shopmarket";

export function ShopMarket(){
  return (
    <ContainerShopMarket>
      <h1>Sacola de Compras</h1>
      <ProductList>
        <div>
          <ImageContainer>
            <Image src={Camisa} alt="Camisa"/>
          </ImageContainer>
          <div>
            <h2>Camisa Byond</h2>
            <h3>R$ 79,90</h3>
            <button>Remover</button>
          </div>
        </div>
      </ProductList>
    </ContainerShopMarket>
  )
}