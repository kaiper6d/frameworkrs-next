import styles from '../src/styles/Home.module.css'

export default function Cabecalho() {
    return (
        <div className={styles.Cabecalho}>
            <h1>Virtual Disney World</h1>
            <a href="/">
                <p>Home</p>
            </a>
        </div>
    )
}