import Image from "next/image";
import { ContainerShopMarket, ProductList, ImageContainer } from "../styles/pages/shopmarket";

export function ShopMarket(){
  return (
    <ContainerShopMarket>
      <h1>Socola de Compras</h1>
      <ProductList>
        <div>
          <ImageContainer>
            <Image />
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