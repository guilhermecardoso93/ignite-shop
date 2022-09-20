import { AppProps } from "next/app";
import {CartProvider, useShoppingCart} from 'use-shopping-cart'
import { globalStyles } from "../styles/global";
import { Container } from "../styles/pages/app";
import { Header } from "../components/Header";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      cartMode="checkout-session"
      stripe={process.env.STRIPE_PRIVATE_KEY}
      currency="BRL"
    >
      <Container>
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  );
}
