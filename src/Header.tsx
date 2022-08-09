import styles from './Header.module.css';
import logo from '../src/assets/logo.svg'

export function Header(){
    return(
        <header className={styles.header}>
            <img src={logo} className={styles.logo} alt='imagem de logo' />
        </header>
    )
}