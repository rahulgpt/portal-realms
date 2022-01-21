import styles from '../styles/components/Footer.module.css';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerTagLine}>Join the Meta Factions<br /> Fantaverse</div>

            <div className={styles.flex}>
                <Image src="/icons/discord.svg" width={50} height={50} />
                <Image src="/icons/telegram.svg" width={50} height={50} />
                <Image src="/icons/twitter.svg" width={50} height={50} />
            </div>

            <div className={styles.flex}>
                <div className={styles.footerLink}>© Portal Realms</div>
                <div className={styles.footerLink}>Terms {'&'} Conditions</div>
                <div className={styles.footerLink}>Privacy Policy</div>
            </div>
        </div>
    )
}

export default Footer;