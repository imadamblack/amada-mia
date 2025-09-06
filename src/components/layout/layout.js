import Head from 'next/head';
import { info } from '../../../info';
import Header from './header';
import Footer from './footer';
import { useEffect } from 'react';
import { useRouter } from 'next/router'

export default function Layout({children}) {
  useEffect(() => {
    const mainHeader = document.getElementsByTagName('header')[0];
    document.querySelector('html').style.scrollPaddingTop = mainHeader.offsetHeight + 'px';
    // document.querySelector('main').style.paddingTop = mainHeader.offsetHeight + 'px';
    document.querySelector('main').style.scrollMarginTop = mainHeader.offsetHeight + 'px';
  }, []);
  const router = useRouter()
  const pathname = router.pathname
  console.log(pathname);

  return (
    <>
      <Head>
        <title>{info.companyName} | {info.description}</title>
        <meta name="description" content={info.description}/>
      </Head>
      <Header/>

      <main className={`flex-grow`}>{children}</main>

      {pathname !== '/survey' && <Footer/>}
    </>
  );
}
