import type { AppProps } from 'next/app';
import Layout from '../components/layouts/Layout'; // Adjusted import path
import '../styles/globals.css'; // Adjusted import path

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
