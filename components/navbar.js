import styles from '../styles/components/Navbar.module.css';
import Image from 'next/image';
import { Link } from 'react-scroll';
import { useState } from 'react';

const Navbar = () => {
    const [overlay, setOverlay] = useState(false);

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
            <div className={styles.hamIcon} onClick={() => setOverlay(!overlay)}>
                <Image src="/icons/ham-menu.svg" layout='fill' objectFit='contain' />
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

            {/* OverlayMenu */}

            <OverlayMenu isVisible={overlay} overlay={overlay} setOverlay={setOverlay} />
        </nav>
    )
}

const OverlayMenu = ({ isVisible, setOverlay, overlay }) => {
    return (
        <div id='overlay' className={styles.overlayMenuContainer} style={{ display: `${isVisible ? 'block' : 'none'}` }}>
            <div className={styles.overlayMenuLinks}>
                <Link to='/' smooth className={styles.overlayLinkElement} onClick={() => setOverlay(!overlay)}>Lore</Link>
                <Link to='cards' smooth className={styles.overlayLinkElement} onClick={() => setOverlay(!overlay)}>Cards</Link>
                <Link to='roadmap' smooth className={styles.overlayLinkElement} onClick={() => setOverlay(!overlay)}>Roadmap</Link>
                <Link to='/' smooth className={styles.overlayLinkElement} onClick={() => setOverlay(!overlay)}>FAQ</Link>
                <Link to='team' smooth className={styles.overlayLinkElement} onClick={() => setOverlay(!overlay)}>Team</Link>
            </div>
            <div className={styles.overlayClose} onClick={() => setOverlay(!overlay)} style={{ display: `${overlay ? 'block' : 'none'}` }}>
                <Image src="/icons/overlay-close.svg" layout='fill' objectFit='contain' />
            </div>
            <div className={styles.overlaySocialIcons}>
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
        </div>
    )
}





export default Navbar;