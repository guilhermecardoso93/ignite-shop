import { GetServerSideProps } from "next";
import Link from "next/link";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import { ImageContainer, ImageList, SuccessContainer } from "../styles/pages/success";
import Image from "next/image";
import Head from "next/head";
import logo from '../assets/logo.svg'

interface SuccessProps {
  customerName: string;
  products: {
    name: string;
    imageUrl: string;
  }[];
}

export default function Success({ customerName, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra concluída | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <Image src={logo} alt="" />
        <h1>Compra efetuada!</h1>
        <ImageList>
          {products.map((product) => {
            return (
              <ImageContainer key={product.name}>
                <Image
                  src={product.imageUrl}
                  width={120}
                  height={110}
                  alt={product.name}
                />
              </ImageContainer>
            );
          })}
        </ImageList>
        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de {products.length}{" "}
          {products.length > 1 ? "camisetas" : "camiseta"}.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details.name;
  const product = session.line_items.data[0].price.product as Stripe.Product;

  return {
    props: {
      customerName,
      product: {
        name: product.name,
        imageUrl: product.images[0],
      },
    },
  };
};
