import { HomeContainer, Product } from "../styles/pages/home";
import Image from "next/image";

import Camisa1 from "../assets/camisa1.png";
import Camisa2 from "../assets/camisa2.png";
import Camisa3 from "../assets/camisa3.png";

import 'keen-slider/keen-slider.min.css'

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
          <strong>Camisa X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={Camisa3} width={520} height={480} alt=''/>
        <footer>
          <strong>Camisa W</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
