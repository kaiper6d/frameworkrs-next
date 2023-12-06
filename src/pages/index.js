import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Cabecalho from '../../componentese/Cabecalho'
import Rodape from '../../componentese/Rodape'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Virtual Disney World</title>
      </Head>
      <Cabecalho />
      <div className={styles.corpo}>
        <div className={styles.corpoCont}>
          <h1 className={styles.titulo}>Virtual Disney World</h1>
          <main className={styles.mainContent}>
            <p>
              Explore a magia, os encantos e os personagens inesquecíveis que habitam o universo mágico da Disney
            </p>
            <a href='/objetos'>
              <div className={styles.entrar}>
                <p>Conheça nosso universo</p>
              </div>
            </a>
          </main>
        </div>
      </div>
      <Rodape />
    </div>
  )
}
