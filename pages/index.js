import Head from 'next/head';

import ImageCarousel from '../components/ImageCarousel';
import NavBar from '../components/NavBar';
import PureCarousel from '../components/PureCarousel';

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Miracle AG Church</title>
        <meta name="description" content="Miracle AG Church website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <main className={styles.main} style={{justifyContent: "flex-start"}}>
        {/* <ImageCarousel /> */}
        <PureCarousel />
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
