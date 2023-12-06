import Cabecalho from '../../../componentese/Cabecalho';
import Rodape from '../../../componentese/Rodape';
import styles from '../../styles/Pages.module.css';

function Profile({ user = {} }) {
    return (
        <div className={styles.personagem}>
            <Cabecalho />
            <div className={styles.descricao}>
                <h2>{user.nome}</h2>
                <h3>{user.usuario}</h3>
                <p>{user.descricao}</p>
            </div>
            <Rodape />
        </div>
    )
}
export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=disney')
    const repo = await res.json()
    const user = await repo[context.params.id];
    return {
        props: { user }
    }
})
export async function getStaticPaths() {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=disney')
    const repo = await res.json()
    const users = await repo;
    const paths = users.map((user, index) => {
        return { params: { id: String(index) } };
    });
    return {
        paths,
        fallback: false,
    };
}
export default Profile;
