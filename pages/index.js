import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import styles from '../styles/Home.module.css'

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log('hi banner button')
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connisseur</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonLabel="View stores nearby"
          handleOnClick={handleOnBannerBtnClick}
        />
      </main>
    </div>
  )
}
