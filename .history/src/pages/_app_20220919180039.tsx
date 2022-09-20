import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import Image from "next/image";

import LogoImg from '../assets/logo.svg'
import { Container, Header } from "../styles/pages/app";
import { Handbag } from "phosphor-react";


globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={LogoImg} alt="" />
        <div>
        <Handbag size={32} color="#d3d3df" />
        </div>
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
