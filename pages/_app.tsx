import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Container } from 'inversify';
import { Provider } from 'inversify-react';
import container from '../container'

export default function App({ Component, pageProps }: AppProps) {
  return <Provider container={() => {
    return container.MyContainer;
  }}>
    <Component {...pageProps} />
  </Provider>
}
