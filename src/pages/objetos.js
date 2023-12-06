import Cabecalho from "../../componentese/Cabecalho";
import Rodape from "../../componentese/Rodape";  
import styles from "@/styles/Pages.module.css";
import Link from "next/link";

function Users({ users }) {
    return (
        <div>
            <Cabecalho />
            <div className={styles.objetosContainer}>
                <h2>Personagens</h2>
                <div className={styles.divObjeto}>
                    {users.map((user, index) => (
                        <Link href='/profile/[id]' as={`/profile/${index}`} className={styles.link}>
                            <div key={user.id} className={styles.objeto} >
                                <p>{user.nome}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Rodape />
        </div>
    )
}
export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=disney')
    const repo = await res.json()
    const users = await repo;
    return {
        props: {
            users
        }
    }
})

export default Users;
