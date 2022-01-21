import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import StyledButton from '../components/button';
import TeamMeber from '../components/team-member';
import { useState, useRef, useEffect } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';


export default function Home() {
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
    <div className={styles.container}>

      {/* Hero Section */}
      <div className={styles.heroContainer} ref={vantaRef}>
        <div className={styles.heading}>PORTAL REALMS</div>
        <div className={styles.subHeading}>LAUNCHING MID FEB 2022</div>
        <StyledButton marginRight="2rem" label1="PRIVATE MINT" label2="10 FEB - 8:00PM CET" />
        <StyledButton label1="PRIVATE MINT" label2="10 FEB - 8:00PM CET" />

        <div className={styles.cardContainer}>
          <Image src='/images/Card_Bio.png' width={222} height={312} />
          <Image src='/images/Card_Invictus.png' width={222} height={312} />
          <Image src='/images/Card_Nova.png' width={222} height={312} />
          <Image src='/images/Card_Lush.png' width={222} height={312} />
          <Image src='/images/Card_Secluded.png' width={222} height={312} />
        </div>
      </div>

      {/* Story Section */}

      <div className={styles.storyContainer}>
        <div className={styles.firstPara}>In the beginning was the<br /> word, and the word was -</div>
        <div className={styles.secondPara}>Earth, far in the future... Drained from supporting human life has fallen into a desperate<br /> need for energy. Humanity attempted to unlock the solution by hastily experimenting<br /> with anti-matter. The consequences were devastating.</div>
        <video autoPlay loop muted src='/video/hero_bg.mp4' type='video/mp4' />
      </div>

      <div>
        <div className={styles.yellowCirle}>

        </div>
        <div className={styles.transparentCircle}>

        </div>
      </div>

      {/* Team Section */}

      <div className={styles.teamContainer}>
        <div className={styles.teamHeading}>Meet the amazing team</div>
        <div className={styles.teamSubHeading}>The senior team behind Origami has decades of experience<br /> building software, communities, successful ventures and<br /> companies and merchandising game collectibles. Say hello!</div>
        <div className={styles.teamMembersContainer}>
          <TeamMeber memTile="Eugene" memSubTitle="Creative Director" color="#ECD6FD" />
          <TeamMeber memTile="Eugene" memSubTitle="Creative Director" color="#FFDEE2" />
          <TeamMeber memTile="Eugene" memSubTitle="Creative Director" color="#CCD5FF" />
          <TeamMeber memTile="Eugene" memSubTitle="Creative Director" color="#E2FFEF" />
          <TeamMeber memTile="Eugene" memSubTitle="Creative Director" color="#DCFCFF" />
          <TeamMeber memTile="Eugene" memSubTitle="Creative Director" color="#F9F0D9" />
          <TeamMeber memTile="Eugene" memSubTitle="Creative Director" color="#DCFCFF" />
          <TeamMeber memTile="Eugene" memSubTitle="Creative Director" color="#F9F0D9" />
        </div>
      </div>
    </div>
  )
}
