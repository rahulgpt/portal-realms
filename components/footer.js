import styles from '../styles/components/Footer.module.css';
import Image from 'next/image';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';
import { useState, useRef, useEffect } from 'react';

const Footer = () => {
    const [vantaEffect, setVantaEffect] = useState(0)
    const vantaRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(NET({
                el: vantaRef.current,
                THREE,
                color: 0xed8ca6,
                backgroundColor: 0x0
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    return (
        <div className={styles.footerContainer} ref={vantaRef}>
            <div className={styles.footerTagLine}>See you on the<br /> other side</div>

            <div className={styles.flex}>
                <div className={styles.imageWrapper}>
                    <Image src="/icons/discord-white.svg" layout='fill' objectFit='contain' />
                </div>
                <div className={styles.imageWrapper}>
                    <Image src="/icons/telegram-white.svg" layout='fill' objectFit='contain' />
                </div>
                <div className={styles.imageWrapper}>
                    <Image src="/icons/twitter-white.svg" layout='fill' objectFit='contain' />
                </div>

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