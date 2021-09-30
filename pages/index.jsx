import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Cards from '../components/Cards';
import ProductDetail from '../components/ProductDetail';
import Loader from '../components/Loader';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(async () => {
    const info = await fetch('api/getInfo');
    setData(await info.json());

    setLoading(false);
  }, []);

  if (loading) return <Loader />;
  return (
    <div>
      <Head>
        <title>TKNZ</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='hero is-fullheight has-bg-grey'>
        <div className='hero-body'>
          <div className='container is-max-desktop'>
            <div className='columns'>
              <div className='column'>
                <Cards data={data?.imageURLs} />
              </div>
              <div className='column  is-flex is-align-items-stretch '>
                <ProductDetail data={data} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
