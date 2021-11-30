import type { AppProps } from 'next/app';
import 'terminal.css';
import { Layout } from '../src/components/Layout';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
