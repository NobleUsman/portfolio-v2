import { AppProps } from 'next/app'
import '../styles/global.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />
  return (
    <>
      {/* <h1>gotchaaa !!!</h1> */}
      <Component {...pageProps} />
    </>
  )
}
