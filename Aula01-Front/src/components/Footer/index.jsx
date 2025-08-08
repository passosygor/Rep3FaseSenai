import styles from './Footer.module.css'

const Header = ({autor}) =>{
    return(
        <>
        <header className={styles.header}>
        <h2 className={styles.title}>{autor}</h2>
        </header>
        </>
    )
}

export default Header