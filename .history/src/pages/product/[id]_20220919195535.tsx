import { GetStaticPaths, GetStaticProps } from "next";
import {useShoppingCart} from 'use-shopping-cart'
import { stripe } from "../../lib/stripe";
import Stripe from "stripe";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/products";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";
import Head from "next/head";
import { Cart } from "../../components/Cart";

interface ProductsProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    description: string;
    defaultPriceId: string;
  };
}

export default function Product({ product }: ProductsProps) {
  const [cart, setCart] = useState([])
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);
  const {addItem, shouldDisplayCart} = useShoppingCart()

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);
      const response = await axios.post("/api/checkout", {
        priceId: product.defaultPriceId,
      });

      const { checkoutUrl } = response.data;
      window.location.href = checkoutUrl;
    } catch (error) {
      setIsCreatingCheckoutSession(false);
      alert("Falha ao redirecionar para a página de checkout!");
    }
  }

  function handleAddProduct(){

    addItem({
      name: product.name,
      id: product.id,
      price: product.price,
      price_id: product.defaultPriceId,
      image: product.imageUrl,
      currency: 'BRL'
    })
    console.log('added')
  }
  
  return (
    <>
      <Head>
        <title> | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>
          <button
            onClick={handleAddProduct}
            disabled={isCreatingCheckoutSession}
          >
            Adicione ao Carrinho
          </button>
        </ProductDetails>
      </ProductContainer>
      {shouldDisplayCart && (<Cart />)}
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [/*{ params: { id: "price_1Lj8xAF6qd4WqrwJTTmntXi5" } }*/],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        description: product.description,
        price: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price.unit_amount / 100),
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, //Uma hora
  };
};