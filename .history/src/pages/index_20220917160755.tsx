import { HomeContainer, Product } from "../styles/pages/home";
import Image from "next/image";

import Camisa1 from "../assets/camisa1.png";
import Camisa2 from "../assets/camisa2.png";
import Camisa3 from "../assets/camisa3.png";

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={Camisa1} width={520} height={480} alt=''/>
        <footer>
          <strong>Camisa X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={Camisa2} width={520} height={480} alt=''/>
        <footer>
          <p><strong>Camisa Y</strong></p>
          <p>R$ 79,90</p>
        </footer>
      </Product>
    </HomeContainer>
  );
}
