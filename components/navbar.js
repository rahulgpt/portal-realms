import styles from '../styles/components/Navbar.module.css';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>PORTAL REALMS</div>
            <div className={styles.navElementsContainer}>
                <div href='/' className={styles.navElement}>Lore</div>
                <div href='/' className={styles.navElement}>Cards</div>
                <div href='/' className={styles.navElement}>Roadmap</div>
                <div href='/' className={styles.navElement}>FAQ</div>
                <div href='/' className={styles.navElement}>Team</div>
            </div>
            <div className={styles.socialIcons}>
                <div className={styles.socialBG}>
                    <Image src="/icons/twitter.svg" width={23} height={23} />
                </div>
                <div className={styles.socialBG}>
                    <Image src="/icons/discord.svg" width={23} height={23} />
                </div>
                <div className={styles.socialBG}>
                    <Image src="/icons/telegram.svg" width={23} height={23} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;