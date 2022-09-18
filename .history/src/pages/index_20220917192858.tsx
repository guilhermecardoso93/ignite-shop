import { useKeenSlider } from "keen-slider/react";
import { HomeContainer, Product } from "../styles/pages/home";
import Image from "next/image";
import { stripe } from "../lib/stripe";
import { GetServerSideProps } from "next";

import Camisa1 from "../assets/camisa1.png";
import Camisa2 from "../assets/camisa2.png";
import Camisa3 from "../assets/camisa3.png";

import "keen-slider/keen-slider.min.css";



export default function Home(props) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={Camisa1} width={520} height={480} alt="" />
        <footer>
          <strong>Camisa X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={Camisa2} width={520} height={480} alt="" />
        <footer>
          <strong>Camisa X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={Camisa3} width={520} height={480} alt="" />
        <footer>
          <strong>Camisa W</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={Camisa3} width={520} height={480} alt="" />
        <footer>
          <strong>Camisa W</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}

export const getServerSideProps = async () => {
  const response = await stripe.products.list() 
  console.log(response.data)
}