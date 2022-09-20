import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { Handbag } from "phosphor-react";
import Image from "next/image";

import LogoImg from "../assets/logo.svg";
import { Container, Header } from "../styles/pages/app";
import { CartProvider } from "use-shopping-cart/react";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.STRIPE_PRIVATE_KEY}
      successUrl="stripe.com"
      cancelUrl="twitter.com/dayhaysoos"
      currency="USD"
      allowedCountries={["US", "GB", "CA"]}
      billingAddressCollection={true}
    >
      <Container>
        <Header>
          <Image src={LogoImg} alt="" />
          <Handbag size={32} color="#d3d3df" />
        </Header>
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  );
}
