import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { stripe } from "../../lib/stripe";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/products";

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>Camisa X</h1>
        <span>R$ 79,90</span>
        <p>Lorem dnflkignsdkngksdngkld</p>
        <button>Compre agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  return {
    props: {},
    revalidate: 60 * 60 * 1, //Uma hora
  };
};
