import { GetStaticPaths, GetStaticProps } from "next";
import { useShoppingCart } from "use-shopping-cart";
import { stripe } from "../../lib/stripe";
import Stripe from "stripe";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/products";
import Image from "next/image";
import { useState } from "react";
import Head from "next/head";
import { Cart } from "../../components/Cart";

interface ProductProps {
  product: {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    price: string;
    priceNum: number;
    defaultPriceId: string;
  };
}

export default function Product({ product }: ProductProps) {
  const { addItem, shouldDisplayCart } = useShoppingCart();
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  function handleAddProduct() {
    addItem({
      name: product.name,
      id: product.id,
      price: product.priceNum,
      price_id: product.defaultPriceId,
      image: product.imageUrl,
      currency: "BRL",
    });
    console.log("added");
  }
  /*
 

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
*/

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={480} height={520} alt="" />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>
          <button onClick={handleAddProduct}>Adicionar ao Carrinho</button>
        </ProductDetails>
      </ProductContainer>
      {shouldDisplayCart && <Cart />}
    </>
  );
}


export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
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
        description: product.description,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price.unit_amount / 100),
        defaultPriceId: price.id,
        priceNum: price.unit_amount,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hora no cache
  };
};
