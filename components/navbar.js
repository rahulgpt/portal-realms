import styles from '../styles/components/Navbar.module.css';
import Image from 'next/image';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>PORTAL REALMS</div>
            <div className={styles.navElementsContainer}>
                <Link to='/' smooth className={styles.navElement}>Lore</Link>
                <Link to='cards' smooth className={styles.navElement}>Cards</Link>
                <Link to='roadmap' smooth className={styles.navElement}>Roadmap</Link>
                <Link to='/' smooth className={styles.navElement}>FAQ</Link>
                <Link to='team' smooth className={styles.navElement}>Team</Link>
            </div>
            <div className={styles.socialIcons}>
                <div className={styles.socialBG}>
                    <div className={styles.imageWrapper}>
                        <Image src="/icons/twitter-black.svg" layout='fill' objectFit='contain' />
                    </div>
                </div>
                <div className={styles.socialBG}>
                    <div className={styles.imageWrapper}>
                        <Image src="/icons/discord-black.svg" layout='fill' objectFit='contain' />
                    </div>
                </div>
                <div className={styles.socialBG}>
                    <div className={styles.imageWrapper}>
                        <Image src="/icons/telegram-black.svg" layout='fill' objectFit='contain' />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;