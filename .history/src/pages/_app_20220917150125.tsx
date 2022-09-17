import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import LogoImg from '../assets/logo.svg'
import Image from "next/image";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <header>
        <Image src={LogoImg} alt="" />
      </header>
      <Component {...pageProps} />
    </div>
  );
}
