import { AppProps } from 'next/app'
import Router, { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Layout from '../components/layout'
import '../styles/global.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    Router.events.on('routeChangeStart', () => setIsLoading(true));
    Router.events.on('routeChangeComplete', () => setIsLoading(false));
    Router.events.on('routeChangeError', () => setIsLoading(false));
    return () => {
      Router.events.off('routeChangeStart', () => setIsLoading(true));
      Router.events.off('routeChangeComplete', () => setIsLoading(false));
      Router.events.off('routeChangeError', () => setIsLoading(false));
    };
  }, [Router.events]);

  const router = useRouter();
  
  // this has been set up to ensure that layout doesnt show up on error pages
  if (router.route === "/_error") {
    return <Component {...pageProps} />
  }
  
  return (
    // <>
    //   <Layout>
    //     <Component {...pageProps} />
    //   </Layout>
    // </>

    <>
      {/* put loading inside layout conditionally */}
      {/* {
        isLoading ? 
          <div>loaaaadinggggg .....</div>
        :
        (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )
      } */}

      <Layout>
        {
          !isLoading ? (
            <Component {...pageProps} />
          ) : (
            <div>loaaaadinggggg .....</div>
          )
        }
      </Layout>

    </>
  )
}
