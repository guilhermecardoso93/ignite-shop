import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { Handbag } from "phosphor-react";
import Image from "next/image";

import LogoImg from "../assets/logo.svg";
import { Container, Header } from "../styles/pages/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={LogoImg} alt="" />
        <Handbag size={32} color="#d3d3df" />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}