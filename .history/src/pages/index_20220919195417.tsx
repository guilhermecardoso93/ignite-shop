import { useKeenSlider } from "keen-slider/react";
import { HomeContainer, Product } from "../styles/pages/home";
import Image from "next/image";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import { GetStaticProps } from "next";
import {Handbag} from 'phosphor-react'
import {useShoppingCart} from 'use-shopping-cart'

import "keen-slider/keen-slider.min.css";
import Link from "next/link";
import Head from "next/head";
import { Cart } from "../components/Cart";
import { Header } from "../components/Header";

interface ProductProps {
  id: string,
  name: string,
  imageUrl: string,
  price: string,
  priceId: string,
  priceNum: number
}
interface HomeProps {
  products: ProductProps[]
}

export default function Home({ products }: HomeProps) {
  const {addItem, shouldDisplayCart} = useShoppingCart()

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  function handleAddProduct(product: ProductProps) {
    addItem({
      name: product.name,
      id: product.id,
      price: product.priceNum,
      price_id: product.priceId,
      image: product.imageUrl,
      currency: 'BRL'
    });
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products?.map((product) => {
          return (
            <Link key={product.id} href={`/product/${product.id}`}>
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={480} alt="" />
                <footer>
                <div>
                      <strong>{product.name}</strong>
                      <span>{product.price}</span>
                    </div>
                    <button onClick={() => handleAddProduct(product)}><Handbag weight="bold" size={32} /></button>
                </footer>
              </Product>
            </Link>
          );
        })}
      </HomeContainer>
      {shouldDisplayCart && (<Cart />)}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      iid: product.id,
      name: product.name,
      imageUrl: product.images[0],
      priceNum: price.unit_amount,
      priceId: price.id,
      price: new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: "BRL"
      }).format(price.unit_amount / 100)
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, //2Horas
  };
};
