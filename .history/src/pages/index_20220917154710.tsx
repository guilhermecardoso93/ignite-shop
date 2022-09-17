import { HomeContainer, Product } from '../styles/pages/home';

import Camisa1 from '../assets/camisa1.png'
import Image from 'next/image';

export default function Home() {
  return (
   <HomeContainer>
    <Product>
      <Image src={Camisa1} />
    </Product>
   </HomeContainer>
  )
}
