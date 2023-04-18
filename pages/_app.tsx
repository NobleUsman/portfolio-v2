import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Layout from '../components/layout'
import '../styles/global.css'

export default function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter();

  // this has been set up to ensure that layout doesnt show up on error pages
  if (router.route === "/_error") {
    return <Component {...pageProps} />
  }

  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  )
}
