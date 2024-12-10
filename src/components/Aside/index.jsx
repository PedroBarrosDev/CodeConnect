import Image from 'next/image'
import styles from './aside.module.css'
import logo from './logo-Code-Connect.png'

export const Aside = () => {
    return (<aside className={styles.aside}>
        {/*<img src="/logo-Code-Connect.png" alt="Logo da Code Connect" />*/}
        <Image src={logo} alt="Logo da Code Connect"/>
    </aside>)
}