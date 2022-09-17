import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()
  return <Component {...pageProps} />
}

